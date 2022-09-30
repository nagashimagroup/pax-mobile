import { useProduct } from "contexts/product";
import { useRouter } from "next/router";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import Stepper from "components/Stepper";
import Gallery from "components/Gallery";
import { getPhaseIdFromStepIndex, getStepIndex } from "utils/packPhase";

function Case() {
  const [stepIndex, setStepIndex] = useState(0);
  const { loading, product, currentCase, updateCase } = useProduct();
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
    updateCase({
      order: currentCase.order as number,
      phaseId: getPhaseIdFromStepIndex(currentCase, index),
    });
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
            requiresPhoto: phase?.requiresPhoto,
            content: (
              <Gallery
                label={phase?.name || "?"}
                path={`${product.projectId}/${product.id}/${currentCase.order}/${phase?.id}`}
                fileType="image/*"
                showTitle={false}
                showHeaderButtons={false}
                size="sm"
              />
            ),
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
