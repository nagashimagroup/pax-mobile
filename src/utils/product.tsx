import type { Product, Case } from "API";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number; label: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.label)}%`}</Typography>
      </Box>
    </Box>
  );
}

export const getTotalCases = (products: (Product | null)[]) => {
  let totalCases = 0;
  if (!products || products.length === 0) return 0;
  products.forEach((p) => {
    if (!p || !p.cases) return;
    totalCases += p.cases.length;
  });
  return totalCases;
};

export const getProductCompletionRate = (product: Product | null) => {
  if (!product || !product.cases || product.cases.length === 0) return 0;
  let packedCases = 0;
  product.cases.forEach((c: Case | null) => {
    if (!c || !c.phaseId) return;
    if (!c.isPacked) return;
    packedCases += 1;
  });
  return packedCases / product.cases.length;
};

export const getProductsCompletionRate = (
  products: (Product | null)[] | undefined
) => {
  if (!products || products.length === 0) return 0;
  const totalCases = getTotalCases(products);
  return (
    products.reduce((r: number, p: Product | null) => {
      if (!p || !p.cases || p.cases.length === 0) return r;
      r += p.cases.filter((c) => c?.isPacked).length;
      return r;
    }, 0) / totalCases
  );
};

export const ProgressIcon = ({ progress }: { progress: number }) => {
  if (progress === 0)
    return (
      <CircularProgressWithLabel
        sx={{ color: "#999" }}
        variant="determinate"
        value={100}
        label={0}
      />
    );

  if (progress === 100)
    return (
      <div className="relative flex items-center justify-center">
        <CircularProgress color="success" variant="determinate" value={100} />
        <CheckCircleIcon color="success" className="absolute inset-1/2" />
      </div>
    );

  return (
    <CircularProgressWithLabel
      variant="determinate"
      value={progress}
      label={progress}
    />
  );
};
