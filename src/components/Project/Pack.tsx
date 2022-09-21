import { useProducts, ProductsProvider } from "contexts/products";
import { useProject } from "contexts/project";
import Accordion from "components/Accordion";
import LinearProgress from "@mui/material/LinearProgress";
import CaseList from "components/Project/CaseList";
import moment from "moment";
import { Product } from "API";
import { List, ListSubheader } from "@mui/material";

function sortByPackEnd(a: Product, b: Product) {
  return moment(a.packagingEnd).isBefore(b.packagingEnd) ? -1 : 1;
}

function sortByDate(a: string, b: string) {
  return moment(a).isBefore(b) ? -1 : 1;
}

function getPackDates(products: Product[]): string[] {
  const uniqueDates = new Set(
    products.map((p) => p.packagingStart) as string[]
  );
  console.log(uniqueDates);
  return Array.from(uniqueDates).sort(sortByDate);
}

function ProductList() {
  const { loading, products } = useProducts();

  if (loading) return <LinearProgress color="secondary" />;

  if (!products) return <div />;

  return (
    <>
      {getPackDates(products).map((packStart) => (
        <List
          key={packStart}
          subheader={
            <ListSubheader component="div">
              {moment(packStart).format("製函指定期日 MM/DD")}
            </ListSubheader>
          }
        >
          <Accordion
            items={products
              ?.filter((p) => p.packagingStart === packStart)
              .sort(sortByPackEnd)
              .map((product, idx: number) => ({
                key: `${product?.name}_${idx}`,
                title: product?.name,
                subtitle: `${product?.packageTypeName}・${moment(
                  product.packagingEnd
                ).format("MM/DD迄")}`,
                content: <CaseList product={product} />,
              }))}
          />
        </List>
      ))}
    </>
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
