/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, createContext, useContext, useEffect } from "react";
import type { Product } from "API";
import useDatalist from "hooks/datalist";

interface ProductsContextValue {
  loading: boolean;
  products: Product[];
}

interface ProductsContextProps {
  children: ReactNode;
  variables: { [key: string]: any };
  by?: "ProjectId" | "ScheduleId" | "PackageTypeId";
}

const ProductsContext = createContext<ProductsContextValue>({
  products: [],
  loading: false,
});

export const ProductsProvider = ({
  variables,
  children,
  by,
}: ProductsContextProps) => {
  const { data, loading, refetch } = useDatalist({
    query: `productsBy${by || "ProjectId"}`,
    variables: variables,
  });

  useEffect(() => {
    refetch(variables);
  }, [variables]);

  return (
    <ProductsContext.Provider value={{ products: data, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const productsContext = useContext(ProductsContext);

  if (productsContext === undefined) {
    throw new Error("useProducts must be within ProductsProvider");
  }

  return productsContext;
};
