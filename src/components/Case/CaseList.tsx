import type { Product, Case } from "API";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import { useAlerts } from "contexts/alerts";

import { ProgressIcon, invalidPhases, getPhaseName } from "utils/case";

interface CaseItemProps {
  product: Product;
  cs: Case | null;
}

function CaseItem({ product, cs }: CaseItemProps) {
  const router = useRouter();
  const { addAlert } = useAlerts();

  if (!cs) return <div />;

  const handleClick = () => {
    if (invalidPhases(cs)) {
      return addAlert({
        message: "梱包フェーズが設定されていません",
        severity: "error",
      });
    }
    router.push(
      `/products/${product.id}?cs=${cs.order}${
        cs.phaseId ? `&phase=${cs.phaseId}` : ""
      }`,
      `/products/${product.id}?cs=${cs.order}${
        cs.phaseId ? `&phase=${cs.phaseId}` : ""
      }`
    );
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ProgressIcon cs={cs} />
        </ListItemIcon>
        <ListItemText
          className="w-full overflow-hidden truncate"
          primary={
            cs.name || `${product.productNumber || product.name}-${cs.order}`
          }
          secondary={getPhaseName(cs)}
        />
      </ListItemButton>
      <Divider component="li" />
    </>
  );
}

interface CasesProps {
  product: Product;
}

export default function CaseList({ product }: CasesProps) {
  if (!product) return null;
  if (!product.cases) return null;
  return (
    <>
      <List dense>
        {product.cases
          .filter((c) => c?.phaseId !== "complete")
          .map((cs: Case | null) => (
            <CaseItem
              key={`${product.id}_case_${cs?.order}`}
              product={product}
              cs={cs}
            />
          ))}
      </List>
    </>
  );
}
