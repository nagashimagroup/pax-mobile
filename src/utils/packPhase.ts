import { Case } from "API";

export const getPhaseIdFromStepIndex = (c: Case, index: number) => {
  if (!c || !c.packPhases) return null;

  if (index === c.packPhases.length) return "final";
  if (index > c.packPhases.length) return "complete";

  const p = c.packPhases[index];
  if (!p) return null;

  return p.id;
};

export const getStepIndex = (c: Case | undefined, phaseId: string) => {
  if (!c || !c.packPhases) return 0;
  if (phaseId === "final") return c.packPhases.length;
  if (phaseId === "complete") return c.packPhases.length + 1;
  const p = c.packPhases.findIndex((p) => p?.id === phaseId);
  if (p < 0) return 0;
  return p;
};
