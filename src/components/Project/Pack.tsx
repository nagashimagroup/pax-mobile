import { useProducts, ProductsProvider } from "contexts/products";
import { useProject } from "contexts/project";
import Accordion from "components/Accordion";
import LinearProgress from "@mui/material/LinearProgress";
import CaseList from "components/Case/CaseList";
import moment from "moment";
import { Product } from "API";
import { List, ListSubheader } from "@mui/material";
import { SchedulesProvider, useSchedules } from "contexts/schedules";
import { useRouter } from "next/router";

function sortByPackEnd(a: Product, b: Product) {
  return moment(a.packagingEnd).isBefore(b.packagingEnd) ? -1 : 1;
}

function packed(p: Product) {
  if (!p.cases) return false;
  return (
    p.cases.filter((c) => c?.phaseId === "complete").length === p.cases.length
  );
}

function ProductList() {
  const { loading: schLoading, schedules } = useSchedules();
  const { loading, products } = useProducts();
  const router = useRouter();
  const { product: pId } = router.query;

  if (loading || schLoading) return <LinearProgress color="secondary" />;

  if (!schedules) return <div>No Schedules</div>;

  if (!products) return <div />;

  return (
    <>
      {schedules.map((schedule) => (
        <List
          key={`schedule_${schedule.id}`}
          subheader={
            <ListSubheader component="div">
              {moment(schedule.packagingDate).format("MM/DD")}
              {moment(schedule.shippingDate).format(" - MM/DD")}
            </ListSubheader>
          }
        >
          <Accordion
            items={products
              ?.filter((p) => p.scheduleId === schedule.id && !packed(p))
              .sort(sortByPackEnd)
              .map((product, idx: number) => ({
                key: `${product?.name}_${idx}`,
                title: product?.name,
                subtitle: `${product?.packageTypeName}・${moment(
                  product.packagingEnd
                ).format("MM/DD迄")}`,
                content: <CaseList product={product} />,
                open: pId ? product?.id === pId : false,
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
    <SchedulesProvider projectId={project.id}>
      <ProductsProvider projectId={project.id}>
        <ProductList />
      </ProductsProvider>
    </SchedulesProvider>
  );
}
