/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer, Reducer, useEffect } from "react";
import _ from "lodash";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "graphql/queries";
import * as mutations from "graphql/mutations";
import { useAlerts } from "contexts/alerts";

interface GraphQLVariables {
  [key: string]: any;
}

export interface GraphQLInput {
  id: string;
  [key: string]: any;
}

interface QueryProps {
  query: string;
  variables?: GraphQLVariables | undefined;
}

interface QueryState {
  data: any;
  loading: boolean;
  nextToken: string | null;
  error: string | boolean;
  refetch: () => null;
  loadNext: () => null;
  update: (query: string, input: GraphQLInput) => void;
}

interface QueryAction {
  type: string;
  payload?: any;
}

interface GraphQLResult {
  data: {
    [key: string]: {
      items: object[];
      nextToken?: string;
    };
  };
  errors: any;
}

const initialState = {
  data: undefined,
  loading: false,
  error: false,
  nextToken: null,
  refetch: () => null,
  loadNext: () => null,
  update: () => null,
};

const reducer: Reducer<QueryState, QueryAction> = (
  state: QueryState,
  action: QueryAction
) => {
  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "DATA_LOADED":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
        nextToken: action.payload.nextToken,
      };
    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "CREATE_DATA":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "DATA_CREATED":
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload.data],
      };
    case "UPDATE_DATA":
      return {
        ...state,
        updating: true,
        error: false,
      };
    case "DATA_UPDATED":
      const newData = state.data;
      newData[
        state.data.findIndex(
          (d: GraphQLInput) => d.id === action.payload.data.id
        )
      ] = action.payload.data;

      return {
        ...state,
        updating: false,
        error: false,
        data: newData,
      };
    case "DELETE_DATA":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "DATA_DELETED":
      return {
        ...state,
        loading: false,
        error: false,
        data: state.data.filter((d: any) => d.id !== action.payload.data.id),
      };
    default:
      return initialState;
  }
};

export default function useDatalist({ query, variables }: QueryProps) {
  const [result, dispatch] = useReducer(reducer, initialState);
  const { addAlert } = useAlerts();

  // triggers data fetch when initialized
  useEffect(() => {
    loadData(variables);
  }, []);

  const loadData = async (gqlVariables: GraphQLVariables | undefined) => {
    try {
      dispatch({ type: "LOAD_DATA" });
      const res = (await API.graphql(
        graphqlOperation(_.get(queries, query), gqlVariables)
      )) as GraphQLResult;

      if (res.errors)
        return dispatch({ type: "SET_ERROR", payload: res.errors });

      const { items, nextToken } = res.data[query];

      dispatch({ type: "DATA_LOADED", payload: { data: items, nextToken } });
    } catch (err) {
      if (typeof err === "string") {
        return dispatch({ type: "SET_ERROR", payload: err });
      } else if (err instanceof Error) {
        return dispatch({ type: "SET_ERROR", payload: err.message });
      }
    }
  };

  const loadNext = async () => {
    try {
      const res = (await API.graphql(
        graphqlOperation(_.get(queries, query), {
          ...variables,
          nextToken: result.nextToken,
        })
      )) as GraphQLResult;

      if (res.errors)
        return dispatch({ type: "SET_ERROR", payload: res.errors });

      const { items, nextToken } = res.data[query];

      dispatch({ type: "DATA_LOADED", payload: { items, nextToken } });
    } catch (err) {
      if (typeof err === "string") {
        return dispatch({ type: "SET_ERROR", payload: err });
      } else if (err instanceof Error) {
        return dispatch({ type: "SET_ERROR", payload: err.message });
      }
    }
  };

  const update = async (mutation: string, input: GraphQLInput | undefined) => {
    try {
      dispatch({ type: "UPDATE_DATA" });
      const res = (await API.graphql(
        graphqlOperation(_.get(mutations, mutation), {
          input,
        })
      )) as GraphQLResult;

      if (res.errors) {
        console.log(res.errors);
        addAlert({ message: res.errors[0].message, severity: "error" });
        return dispatch({ type: "SET_ERROR", payload: res.errors });
      }

      dispatch({ type: "DATA_UPDATED", payload: { data: res.data[mutation] } });
    } catch (err) {
      console.log(err);
      if (typeof err === "string") {
        addAlert({ message: err, severity: "error" });
        return dispatch({ type: "SET_ERROR", payload: err });
      } else if (err instanceof Error) {
        addAlert({ message: err.message, severity: "error" });
        return dispatch({ type: "SET_ERROR", payload: err.message });
      }
    }
  };

  // refetch the same dataset
  // can refetch with new variables
  const refetch = async (
    customVariables: GraphQLVariables | undefined = undefined
  ) => {
    await loadData(customVariables || variables);
  };

  return { ...result, refetch, loadNext, update };
}
