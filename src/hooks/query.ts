/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer, Reducer, useEffect } from "react";
import _ from "lodash";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "graphql/queries";

interface GraphQLVariables {
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
        data: action.payload.items,
        nextToken: action.payload.nextToken,
      };
    case "LOAD_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return initialState;
  }
};

//TODO: Learn proper way to use useReducer
export default function useQuery({ query, variables }: QueryProps) {
  const [result, dispatch] = useReducer(reducer, initialState);

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
        return dispatch({ type: "LOAD_DATA_ERROR", payload: res.errors });

      const { items, nextToken } = res.data[query];

      dispatch({ type: "DATA_LOADED", payload: { items, nextToken } });
    } catch (err) {
      if (typeof err === "string") {
        return dispatch({ type: "LOAD_DATA_ERROR", payload: err });
      } else if (err instanceof Error) {
        return dispatch({ type: "LOAD_DATA_ERROR", payload: err.message });
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
        return dispatch({ type: "LOAD_DATA_ERROR", payload: res.errors });

      const { items, nextToken } = res.data[query];

      dispatch({ type: "DATA_LOADED", payload: { items, nextToken } });
    } catch (err) {
      if (typeof err === "string") {
        return dispatch({ type: "LOAD_DATA_ERROR", payload: err });
      } else if (err instanceof Error) {
        return dispatch({ type: "LOAD_DATA_ERROR", payload: err.message });
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

  return { ...result, refetch, loadNext };
}
