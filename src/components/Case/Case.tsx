/* eslint-disable react-hooks/exhaustive-deps */
import { useProduct } from "contexts/product";
import { useRouter } from "next/router";
import LinearProgress from "@mui/material/LinearProgress";
import { ChangeEvent, useEffect, useState } from "react";
import Stepper from "components/Stepper";
import Gallery from "components/Gallery";
import { getPhaseIdFromStepIndex, getStepIndex } from "utils/packPhase";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function Case() {
  const [stepIndex, setStepIndex] = useState(0);
  const [gw, setGw] = useState<number | string | null>(null);
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
    setGw(Number(currentCase?.grossWeight));
  }, [phaseId, currentCase]);

  if (loading) return <LinearProgress color="secondary" />;

  if (!product) return <div />;
  if (!currentCase || !currentCase.packPhases) return <div />;

  const onStepChange = (index: number, input?: any) => {
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
      ...input,
    });
  };

  const handleNext = () => {
    onStepChange(stepIndex + 1);
  };

  const handleFinish = () => {
    onStepChange(stepIndex + 1, {
      isPacked: true,
      grossWeight: gw,
    });
  };

  const handleBack = () => {
    onStepChange(stepIndex - 1, {
      isPacked: false,
    });
  };

  const handleGwChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGw(e.target.value);
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
            }${phase?.numImgs ? ` x${phase.numImgs}` : ""}`,
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
                previewSize="lg"
                startCamera={phase?.id === phaseId && !!camera}
                expectedNumImgs={phase?.numImgs || undefined}
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
            title: `重量入力${gw ? ` (${gw}kg)` : ""}`,
            disabled: !gw || gw <= 0,
            content: (
              <div>
                <TextField
                  value={gw}
                  onChange={handleGwChange}
                  type="number"
                  label="Gross Weight"
                  variant="outlined"
                  size="small"
                  onFocus={(event) => {
                    event.target.select();
                  }}
                  onBlur={(e) => {
                    setGw(Number(e.target.value));
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                  }}
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Case;
