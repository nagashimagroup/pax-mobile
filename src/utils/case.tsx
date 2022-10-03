import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import ScaleIcon from "@mui/icons-material/Scale";

import type { Case } from "API";

export function invalidPhases(cs: Case) {
  return !cs.packPhases || cs.packPhases.length === 0;
}

export function packComplete(cs: Case) {
  return cs.phaseId === "complete";
}

export function packFinal(cs: Case) {
  return cs.phaseId === "final";
}

export function ProgressIcon({ cs }: { cs: Case }) {
  if (invalidPhases(cs)) return <ErrorIcon color="error" />;
  if (packComplete(cs)) return <CheckCircleIcon color="success" />;
  if (packFinal(cs)) return <ScaleIcon color="primary" />;
  return <CameraAltIcon />;
}
