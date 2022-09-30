/* eslint-disable react-hooks/exhaustive-deps */
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Case, Product } from "API";
import useQuery from "hooks/query";

interface ProductContextValue {
  loading: boolean;
  product: Product | undefined;
  currentCase: Case | undefined;
  setCurrentCase: (cs: Case | undefined) => void;
}

interface ProductContextProps {
  id: string | string[] | undefined;
  caseOrder: string | null | undefined;
  children: ReactNode;
}

const ProductContext = createContext<ProductContextValue>({
  product: undefined,
  loading: false,
  currentCase: undefined,
  setCurrentCase: () => null,
});

export const ProductProvider = ({
  id,
  caseOrder,
  children,
}: ProductContextProps) => {
  const [currentCase, setCurrentCase] = useState<Case | undefined>();
  const { data, loading, refetch } = useQuery({
    query: "getProduct",
    variables: {
      id,
    },
  });

  useEffect(() => {
    refetch({
      id,
    });
  }, [id]);

  // filtering current case
  useEffect(() => {
    if (!caseOrder || !data) return;
    const c = data.cases.filter(
      (c: Case) => c?.order?.toString() === caseOrder
    )[0];
    if (!c) return;
    setCurrentCase({ ...c, name: c.name || `${data.name}-${c.order}` });
  }, [caseOrder, data]);

  return (
    <ProductContext.Provider
      value={{ product: data, loading, currentCase, setCurrentCase }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const productContext = useContext(ProductContext);

  if (productContext === undefined) {
    throw new Error("useProduct must be within ProductsProvider");
  }

  return productContext;
};
