import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import ScaleIcon from "@mui/icons-material/Scale";

import type { Case } from "API";

export const getPhaseName = (c: Case) => {
  if (!c || !c.packPhases) return "-";

  if (c.phaseId === "final") return "重量入力";
  if (c.phaseId === "complete") return "梱包完了";
  const pidx = c.packPhases.findIndex((p) => p?.id === c.phaseId);
  const p = c.packPhases[pidx + 1];
  if (!p) return "-";
  return p.name;
};

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
