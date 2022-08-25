/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "graphql/queries";

interface Group {
  id: string;
  name: string;
}

interface CognitoUser {
  attributes: {
    sub: string;
    email: string;
    email_verified: string;
  };
  username: string;
  tenantId: string;
  groups: Group[];
}

interface AuthContextValue {
  user: CognitoUser | undefined;
  loadingUser: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  currentGroup: Group | undefined;
  setCurrentGroup: (group: Group | undefined) => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: undefined,
  currentGroup: undefined,
  loadingUser: true,
  login: () => null,
  logout: () => null,
  setCurrentGroup: () => null,
});

interface ProviderProps {
  children: ReactNode | ReactNode[];
}

interface GraphQLResult {
  data: {
    [key: string]: any;
  };
  errors: any;
}

const getUserData = async (
  cognitoUser: CognitoUser,
  setUser: Dispatch<SetStateAction<CognitoUser | undefined>>,
  currentGroup: Group | undefined,
  setCurrentGroup: Dispatch<SetStateAction<Group | undefined>>
) => {
  const res = (await API.graphql(
    graphqlOperation(getUser, { id: cognitoUser.attributes.sub })
  )) as GraphQLResult;

  if (res.data.getUser) {
    const userData = res.data.getUser;
    const userGroups = userData.tenant.groups.items;

    let groups = userGroups;
    //if (userData.isAdmin) {
    //groups.unshift(
    //{id: 'all', name: '全てのグループ'}
    //)
    //}

    if (userGroups.length > 0 && !currentGroup)
      setCurrentGroup({ id: userGroups[0].id, name: userGroups[0].name });

    setUser({
      ...cognitoUser,
      ...userData,
      groups,
    });
  }
};

export const AuthProvider = ({ children }: ProviderProps) => {
  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [user, setUser] = useState<CognitoUser | undefined>(undefined);
  const [currentGroup, setCurrentGroup] = useState<Group | undefined>(
    undefined
  );

  useEffect(() => {
    setLoadingUser(true);
    Auth.currentAuthenticatedUser()
      .then((usr) => getUserData(usr, setUser, currentGroup, setCurrentGroup))
      .catch(() => setUser(undefined))
      .finally(() => setLoadingUser(false));
  }, []);

  const login = (username: string, password: string) => {
    setLoadingUser(true);
    Auth.signIn(username, password)
      .then(async (usr) => {
        await getUserData(usr, setUser, currentGroup, setCurrentGroup);
        return usr;
      })
      .catch((err) => {
        if (err.code === "UserNotFoundException") {
          err.message = "Invalid userrname or password";
        }
        setUser(undefined);
        throw err;
      })
      .finally(() => {
        setLoadingUser(false);
      });
  };

  const logout = () => {
    Auth.signOut().then((data) => {
      setUser(undefined);
      return data;
    });
  };

  // useMemo to prevent force re-render components that are reading these values
  const values = useMemo(
    () => ({ user, login, logout, loadingUser, currentGroup, setCurrentGroup }),
    [user, loadingUser, currentGroup, setCurrentGroup]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (authContext === undefined) {
    throw new Error("useAuth must be within AuthProvider");
  }

  return authContext;
};
