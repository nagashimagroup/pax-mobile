import { ReactNode, createContext, useContext } from "react";
import type { Account } from "API";
import useQuery from "hooks/query";
import { useAuth } from "contexts/auth";

interface AccountsContextValue {
  loading: boolean;
  accounts: Account[];
  loadNext: () => void;
}

const AccountsContext = createContext<AccountsContextValue>({
  accounts: [],
  loading: false,
  loadNext: () => null,
});
export const AccountsProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const { data, loading, loadNext } = useQuery({
    query: "accountsByTenantId",
    variables: {
      tenantId: user?.tenantId,
      limit: 100,
    },
  });

  return (
    <AccountsContext.Provider value={{ accounts: data, loading, loadNext }}>
      {children}
    </AccountsContext.Provider>
  );
};

export const useAccounts = () => {
  const accountsContext = useContext(AccountsContext);

  if (accountsContext === undefined) {
    throw new Error("useAccounts must be within AuthProvider");
  }

  return accountsContext;
};
