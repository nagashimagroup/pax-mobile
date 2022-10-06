import { ProductsProvider, useProducts } from "contexts/products";
import { useProject } from "contexts/project";
import Accordion from "components/Accordion";
import LinearProgress from "@mui/material/LinearProgress";
import CaseList from "components/Case/CaseList";
import moment from "moment";
import { Product } from "API";
import { List, ListSubheader } from "@mui/material";
import { useSchedules } from "contexts/schedules";
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
  const router = useRouter();
  const { product: pId } = router.query;
  const { loading, products } = useProducts();

  if (loading) return <LinearProgress color="secondary" />;
  if (!products) return <div>No Products</div>;

  return (
    <Accordion
      items={products
        .filter((p) => !packed(p))
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
  );
}

function ScheduleList() {
  const { loading, schedules } = useSchedules();

  if (loading) return <LinearProgress color="secondary" />;
  if (!schedules) return <div>No Schedules</div>;

  return (
    <div className="m-2">
      {schedules.map((schedule) => (
        <ProductsProvider
          key={`schedule_${schedule.id}`}
          variables={{ scheduleId: schedule.id }}
          by="ScheduleId"
        >
          <List
            subheader={
              <ListSubheader component="div">
                {moment(schedule.packagingDate).format("MM/DD")}
                {moment(schedule.shippingDate).format(" - MM/DD")}
              </ListSubheader>
            }
          >
            <ProductList />
          </List>
        </ProductsProvider>
      ))}
    </div>
  );
}

export default function ProjectDetail() {
  const { project } = useProject();

  if (!project) return <div />;

  return <ScheduleList />;
}
