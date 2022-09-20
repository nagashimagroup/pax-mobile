import { useProducts, ProductsProvider } from "contexts/products";
import { useProject } from "contexts/project";
import Accordion from "components/Accordion";
import LinearProgress from "@mui/material/LinearProgress";
import CaseList from "components/Project/CaseList";

function ProductList() {
  const { loading, products } = useProducts();

  if (loading) return <LinearProgress color="secondary" />;

  if (!products) return <div />;

  return (
    <Accordion
      items={products?.map((product, idx: number) => ({
        key: `${product?.name}_${idx}`,
        title: product?.name,
        subtitle: product?.packageTypeName,
        content: <CaseList product={product} />,
      }))}
    />
  );
}

export default function ProjectDetail() {
  const { project } = useProject();

  if (!project) return <div />;

  return (
    <ProductsProvider projectId={project.id}>
      <ProductList />
    </ProductsProvider>
  );
}
