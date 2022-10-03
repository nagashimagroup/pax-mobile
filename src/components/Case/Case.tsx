/* eslint-disable react-hooks/exhaustive-deps */
import { useProduct } from "contexts/product";
import { useRouter } from "next/router";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import Stepper from "components/Stepper";
import Gallery from "components/Gallery";
import { getPhaseIdFromStepIndex, getStepIndex } from "utils/packPhase";

function Case() {
  const [stepIndex, setStepIndex] = useState(0);
  const { loading, product, currentCase, updateCase, updatePhase } =
    useProduct();
  const router = useRouter();

  const { phase: phaseId, camera } = router.query;

  useEffect(() => {
    router.beforePopState(({ as }) => {
      console.log({ as }, router.asPath);
      if (as !== router.asPath) {
        router.push(
          `/projects/${product?.projectId}?status=PACK&&product=${product?.id}`
        );
      }
      return true;
    });
    return () => router.beforePopState(() => true);
  }, [router]);

  useEffect(() => {
    setStepIndex(getStepIndex(currentCase, phaseId as string));
  }, [phaseId, currentCase]);

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
      {
        shallow: true,
      }
    );
    updateCase({
      order: currentCase.order as number,
      phaseId: getPhaseIdFromStepIndex(currentCase, index) as string,
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
    <div className="w-full p-3">
      <Stepper
        index={stepIndex}
        onNext={handleNext}
        onBack={handleBack}
        onFinish={handleFinish}
        completedText="梱包作業が完了しました"
        steps={[
          ...currentCase.packPhases.map((phase) => ({
            title: `${phase?.name || "?"} ${
              !phase?.requiresPhoto ? "(任意)" : ""
            }`,
            disabled: phase?.requiresPhoto && !phase?.numImgs,
            content: (
              <Gallery
                label={phase?.name || "?"}
                path={`${product.projectId}/${product.id}/${currentCase.order}/${phase?.id}`}
                fileType="image/*"
                showTitle={false}
                showHeaderButton={true}
                showFileUploadButton={true}
                size="sm"
                startCamera={phase?.id === phaseId && !!camera}
                updateCallback={(fileList) => {
                  updatePhase(
                    currentCase.order as number,
                    phase?.id as string,
                    {
                      numImgs: fileList.length,
                    }
                  );
                }}
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
