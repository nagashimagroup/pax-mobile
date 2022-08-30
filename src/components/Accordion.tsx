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
  content: ReactNode | ReactNode[] | string;
}

export default function AccordionComponent({ items }: AccordionProps) {
  if (!items) return null;
  return (
    <>
      {items.map((item) => (
        <Accordion key={item.key}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
