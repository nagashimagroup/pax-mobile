import type { Product, Case } from "API";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import InventoryIcon from "@mui/icons-material/Inventory";

interface CaseItemProps {
  product: Product;
  cs: Case | null;
}

function CaseItem({ product, cs }: CaseItemProps) {
  if (!cs) return <div />;
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <ListItemText
          className="w-full overflow-hidden truncate"
          primary={
            cs.name || `${product.productNumber || product.name}-${cs.order}`
          }
          secondary={`GW: ${cs.grossWeight || "-"}  /  NW: ${
            cs.netWeight || "-"
          }`}
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
    <List dense>
      {product.cases.map((cs: Case | null) => (
        <CaseItem
          key={`${product.id}_case_${cs?.order}`}
          product={product}
          cs={cs}
        />
      ))}
    </List>
  );
}
