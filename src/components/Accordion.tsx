import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode } from "react";

interface AccordionProps {
  items: Data[] | null | undefined;
}

interface Data {
  key: number | string;
  title: string | null | undefined;
  subtitle?: string | null | undefined;
  content: ReactNode | ReactNode[] | string | undefined;
  open?: boolean;
  className?: string;
}

export default function AccordionComponent({ items }: AccordionProps) {
  if (!items) return null;
  return (
    <>
      {items.map((item) => (
        <Accordion
          className={item.className || ""}
          key={item.key}
          defaultExpanded={item.open || false}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography sx={{ flexShrink: 0, marginRight: 4 }}>
              {item.title}
            </Typography>
            {item.subtitle && (
              <Typography sx={{ color: "text.secondary" }}>
                {item.subtitle}
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
