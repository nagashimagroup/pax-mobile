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
  projectId: string;
}

const ProductsContext = createContext<ProductsContextValue>({
  products: [],
  loading: false,
});

export const ProductsProvider = ({
  projectId,
  children,
}: ProductsContextProps) => {
  const { data, loading, refetch } = useDatalist({
    query: "productsByProjectId",
    variables: {
      projectId,
    },
  });

  useEffect(() => {
    refetch({
      id: projectId,
    });
  }, [projectId]);

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
