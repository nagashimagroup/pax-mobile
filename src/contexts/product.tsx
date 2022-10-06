/* eslint-disable react-hooks/exhaustive-deps */
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useRouter } from "next/router";
import type { Case, PackPhase, Product } from "API";
import useData, { GraphQLInput } from "hooks/data";

interface CaseInput {
  order: number;
  phaseId: string;
  [key: string]: any;
}

interface PhaseInput {
  [key: string]: any;
}

interface ProductContextValue {
  loading: boolean;
  product: Product | undefined;
  currentCase: Case | undefined;
  setCurrentCase: (cs: Case | undefined) => void;
  update: (input: GraphQLInput) => void;
  updateCase: (input: CaseInput) => void;
  updatePhase: (caseOrder: number, phaseId: string, input: PhaseInput) => void;
}

interface ProductContextProps {
  id: string | string[] | undefined;
  caseOrder?: string | null | undefined;
  children: ReactNode;
}

const ProductContext = createContext<ProductContextValue>({
  product: undefined,
  loading: false,
  currentCase: undefined,
  setCurrentCase: () => null,
  update: () => null,
  updateCase: () => null,
  updatePhase: () => null,
});

export const ProductProvider = ({
  id,
  caseOrder,
  children,
}: ProductContextProps) => {
  const [currentCase, setCurrentCase] = useState<Case | undefined>();
  const {
    push,
    asPath,
    query: { phase },
  } = useRouter();

  const { data, loading, refetch, update } = useData({
    object: "product",
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
    // if no phase parameter, pass the latest phase id
    if (!phase && c.phaseId) push(`${asPath}&phase=${c.phaseId}`);
    setCurrentCase({ ...c, name: c.name || `${data.name}-${c.order}` });
  }, [caseOrder, data]);

  const updateCase = async (input: CaseInput) => {
    if (!caseOrder || !data) return;
    const idx = data.cases.findIndex((c: Case) => c.order === input.order);
    let newCs = data.cases;
    newCs[idx] = {
      ...newCs[idx],
      ...input,
    };
    update({
      id: data.id,
      cases: newCs,
    });
  };

  const updatePhase = async (
    caseOrder: number,
    phaseId: string,
    input: PhaseInput
  ) => {
    if (!caseOrder || !data) return;
    let newCs = data.cases;
    const idx = newCs.findIndex((c: Case) => c.order === caseOrder);
    let newPhases = data.cases[idx].packPhases;
    const pidx = newPhases.findIndex((p: PackPhase) => p.id === phaseId);
    newCs[idx].packPhases[pidx] = { ...newPhases[pidx], ...input };
    await update({
      id: data.id,
      cases: newCs,
    });
  };

  const values = useMemo(
    () => ({
      product: data,
      update,
      updateCase,
      updatePhase,
      loading,
      currentCase,
      setCurrentCase,
    }),
    [data, update, updateCase, updateCase, loading, currentCase, setCurrentCase]
  );

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => {
  const productContext = useContext(ProductContext);

  if (productContext === undefined) {
    throw new Error("useProduct must be within ProductsProvider");
  }

  return productContext;
};
