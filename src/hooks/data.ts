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
  object: string;
  variables?: GraphQLVariables | undefined;
}

interface QueryState {
  data: any;
  loading: boolean;
  updating: boolean;
  nextToken: string | null;
  error: string | boolean;
  refetch: () => null;
  loadNext: () => null;
  update: () => null;
}

interface QueryAction {
  type: string;
  payload?: any;
}

interface GraphQLResult {
  data: {
    [key: string]: object[];
  };
  errors: any;
}

const initialState = {
  data: undefined,
  loading: false,
  updating: false,
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
      };
    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "UPDATE_DATA":
      return {
        ...state,
        updating: true,
        error: false,
      };
    case "DATA_UPDATED":
      return {
        ...state,
        updating: false,
        error: false,
        data: action.payload.data,
      };
    case "DELETE_DATA":
      return {
        ...state,
        updating: true,
        error: false,
      };
    case "DATA_DELETED":
      return {
        ...state,
        updating: false,
        error: false,
        data: {},
      };
    default:
      return initialState;
  }
};

function cap(str: string) {
  return `${str[0].toUpperCase()}${str.substring(1).toLowerCase()}`;
}

//TODO: Learn proper way to use useReducer
export default function useData({ object, variables }: QueryProps) {
  const [result, dispatch] = useReducer(reducer, initialState);
  const { addAlert } = useAlerts();

  // triggers data fetch when initialized
  useEffect(() => {
    getData(variables);
  }, []);

  const getData = async (gqlVariables: GraphQLVariables | undefined) => {
    try {
      const query = `get${cap(object)}`;
      dispatch({ type: "LOAD_DATA" });
      const res = (await API.graphql(
        graphqlOperation(_.get(queries, query), gqlVariables)
      )) as GraphQLResult;

      if (res.errors) {
        addAlert({ message: res.errors[0].message, severity: "error" });
        return dispatch({ type: "SET_ERROR", payload: res.errors });
      }

      dispatch({ type: "DATA_LOADED", payload: { data: res.data[query] } });
    } catch (err) {
      if (typeof err === "string") {
        addAlert({ message: err, severity: "error" });
        return dispatch({ type: "SET_ERROR", payload: err });
      } else if (err instanceof Error) {
        addAlert({ message: err.message, severity: "error" });
        return dispatch({ type: "SET_ERROR", payload: err.message });
      }
    }
  };

  const update = async (input: GraphQLInput | undefined) => {
    try {
      const mutation = `update${cap(object)}`;
      dispatch({ type: "UPDATE_DATA" });
      const res = (await API.graphql(
        graphqlOperation(_.get(mutations, mutation), {
          input,
        })
      )) as GraphQLResult;

      if (res.errors) {
        console.log(err);
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
    await getData(customVariables || variables);
  };

  return { ...result, refetch, update };
}
