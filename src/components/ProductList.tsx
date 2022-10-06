import type { Product } from "API";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import { getProductCompletionRate, ProgressIcon } from "utils/product";
import { useProducts } from "contexts/products";

function ProductItem({ product }: { product: Product | null }) {
  const router = useRouter();

  if (!product) return <div />;

  const handleClick = () => {
    if (getProductCompletionRate(product) < 1) {
      router.push(
        `/projects/${product.projectId}?status=PACK&product=${product.id}`
      );
    } else {
      router.push(`/products/${product.id}?cs=1`);
    }
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ProgressIcon progress={getProductCompletionRate(product) * 100} />
        </ListItemIcon>
        <ListItemText
          className="w-full overflow-hidden truncate"
          primary={product.name}
          secondary={`${product.cases ? `${product.cases.length}ケース` : "-"}`}
        />
      </ListItemButton>
      <Divider component="li" />
    </>
  );
}

export default function ProductList() {
  const { products } = useProducts();
  if (!products || products.length === 0) return null;
  return (
    <>
      <List dense>
        {products.map((p: Product | null) => (
          <ProductItem key={p?.id} product={p} />
        ))}
      </List>
    </>
  );
}
