import { useSchedules } from "contexts/schedules";
import { ImagesProvider } from "contexts/images";
import { SelectedImagesProvider } from "contexts/selectedImages";
import { Images, GalleryHeader, SelectFooter } from "components/Gallery";
import Accordion from "components/Accordion";
import ProductList from "components/ProductList";
import Card from "components/Card";
import { Schedule } from "API";
import moment from "moment";
import {
  getProductsCompletionRate,
  getTotalCases,
  ProgressIcon,
} from "utils/product";
import { ProductsProvider, useProducts } from "contexts/products";
import { Typography, Button } from "@mui/material";
import { ReactNode } from "react";

const items = (schedule: Schedule, update: any) => [
  {
    key: `${schedule.id}_gallery`,
    title: `${schedule.name} 出荷写真`,
    subtitle: schedule.numImgs ? `x${schedule.numImgs}` : "",
    open: true,
    className: "bg-gray-100",
    content: (
      <ImagesProvider
        label={`${schedule.name}出荷写真`}
        path={`${schedule.id}/stocking`}
        fileType="image/*"
        size="sm"
        previewSize="lg"
        updateCallback={(images) => {
          update("updateSchedule", {
            id: schedule.id,
            numImgs: images.length,
          });
        }}
        expectedNumImgs={schedule.numImgs || undefined}
      >
        <GalleryHeader
          showTitle={false}
          showHeaderButton
          showFileUploadButton
        />
        <Images />
      </ImagesProvider>
    ),
  },
  {
    key: `${schedule.id}_products`,
    title: `${schedule.name} 製品`,
    subtitle: `x${schedule?.products?.items.length}`,
    open: true,
    className: "bg-gray-100",
    content: <ProductList />,
  },
];

interface StatProps {
  content: ReactNode;
  label?: string;
}

function Stat({ content, label }: StatProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {content}
      <Typography variant="body2" color="text.secondary">
        {label || ""}
      </Typography>
    </div>
  );
}

interface ShipStatsProps {
  schedule: Schedule;
}

function ShipStats({ schedule }: ShipStatsProps) {
  const { products } = useProducts();
  const { update } = useSchedules();
  return (
    <div className="w-full">
      <div className="flex justify-around items-center">
        <Stat
          content={
            <ProgressIcon
              progress={getProductsCompletionRate(products) * 100}
            />
          }
          label="梱包完了"
        />
        <Stat
          content={
            <Typography variant="h5">{getTotalCases(products)}</Typography>
          }
          label="ケース"
        />
        <Stat
          content={<Typography variant="h5">{schedule.shipType}</Typography>}
          label="出荷方法"
        />
      </div>
      <div className="w-full my-2">
        {getProductsCompletionRate(products) === 1 && !schedule.isShipped && (
          <Button
            fullWidth
            variant="outlined"
            onClick={() =>
              update("updateSchedule", {
                id: schedule.id,
                isShipped: true,
              })
            }
          >
            出荷完了
          </Button>
        )}
      </div>
    </div>
  );
}

export default function Ship() {
  const { schedules, update } = useSchedules();

  if (!schedules) return null;
  return (
    <SelectedImagesProvider>
      <div className="p-3 flex flex-col justify-center items-center gap-4">
        <Typography variant="body2" color="text.secondary">
          {schedules.filter((s) => s.isShipped).length}/{schedules.length}{" "}
          出荷完了
        </Typography>
        {schedules.map((schedule) => (
          <ProductsProvider
            key={schedule.id}
            variables={{ scheduleId: schedule?.id }}
            by="ScheduleId"
          >
            <Card
              status={schedule.isShipped ? "済" : "未"}
              statusColor={schedule.isShipped ? "#2196f3" : "gray"}
              title={`${schedule.name}${
                schedule.numImgs ? ` x${schedule.numImgs}` : ""
              }`}
              subtitle={`${moment(schedule.packagingDate).format(
                "MM/DD"
              )}${moment(schedule.shippingDate).format(" - MM/DD")}`}
              content={<ShipStats schedule={schedule} />}
              extra={<Accordion items={items(schedule, update)} />}
            />
          </ProductsProvider>
        ))}
        <SelectFooter />
      </div>
    </SelectedImagesProvider>
  );
}
