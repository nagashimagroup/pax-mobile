import { useProduct } from "contexts/product";
import { useRouter } from "next/router";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import { Case } from "API";
import Stepper from "components/Stepper";

const getPhaseIdFromStepIndex = (c: Case, index: number) => {
  if (!c || !c.packPhases) return null;

  if (index === c.packPhases.length) return "final";
  if (index > c.packPhases.length) return "complete";

  const p = c.packPhases[index];
  if (!p) return null;

  return p.id;
};

const getStepIndex = (c: Case | undefined, phaseId: string) => {
  if (!c || !c.packPhases) return 0;
  if (phaseId === "final") return c.packPhases.length;
  if (phaseId === "complete") return c.packPhases.length + 1;
  const p = c.packPhases.findIndex((p) => p?.id === phaseId);
  if (p < 0) return 0;
  return p;
};

function Case() {
  const [stepIndex, setStepIndex] = useState(0);
  const { loading, product, currentCase } = useProduct();
  const router = useRouter();

  const { phase } = router.query;

  useEffect(() => {
    setStepIndex(getStepIndex(currentCase, phase as string));
  }, [phase, currentCase]);

  useEffect(() => {
    window.onpopstate = () => {
      router.push("/");
    };
  }, [router]);

  if (loading) return <LinearProgress color="secondary" />;

  if (!product) return <div />;
  if (!currentCase || !currentCase.packPhases) return <div />;

  const onStepChange = (index: number) => {
    const phaseId = getPhaseIdFromStepIndex(currentCase, index);
    router.push(
      `/products/${product.id}?cs=${currentCase?.order}${
        phaseId ? `&phase=${phaseId}` : ""
      }`,
      undefined,
      { shallow: true }
    );
  };

  const handleNext = () => {
    onStepChange(stepIndex + 1);
  };

  const handleFinish = () => {
    onStepChange(stepIndex + 1);
  };

  const handleBack = () => {
    onStepChange(stepIndex - 1);
  };

  return (
    <div className="p-3">
      <Stepper
        index={stepIndex}
        onNext={handleNext}
        onBack={handleBack}
        onFinish={handleFinish}
        completedText="梱包作業が完了しました"
        steps={[
          ...currentCase.packPhases.map((phase) => ({
            title: phase?.name || "?",
            content: <div className="h-screen bg-black" />,
          })),
          {
            title: "梱包完了",
            content: "GW",
          },
        ]}
      />
    </div>
  );
}

export default Case;
