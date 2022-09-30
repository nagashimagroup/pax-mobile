import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface StepsProps {
  index: number;
  completedText: string;
  steps: Step[];
  onBack: () => void;
  onNext: () => void;
  onFinish: () => void;
}

interface Step {
  title: string;
  content: ReactNode | ReactNode[] | string;
}

export default function VerticalLinearStepper({
  steps,
  completedText,
  index,
  onNext,
  onBack,
  onFinish,
}: StepsProps) {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={index} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.title}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">最終フェーズ</Typography>
                ) : null
              }
            >
              {step.title}
            </StepLabel>
            <StepContent>
              {step.content}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      index === steps.length - 1 ? onFinish() : onNext()
                    }
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "完了" : "次へ"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={onBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    戻る
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {index === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>{completedText}</Typography>
          <Button onClick={onBack} sx={{ mt: 1, mr: 1 }}>
            前に戻る
          </Button>
        </Paper>
      )}
    </Box>
  );
}
