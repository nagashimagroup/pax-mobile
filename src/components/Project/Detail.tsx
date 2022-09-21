import { useProject } from "contexts/project";
import type { KeyDate } from "API";
import { getStatusText } from "utils/status";
import Accordion from "components/Accordion";
import Divider from "@mui/material/Divider";
import { ReactNode } from "react";
import moment from "moment";

interface ItemProps {
  label: string;
  data: string | null | undefined | ReactNode;
}

function Item({ label, data }: ItemProps) {
  if (!data) return null;

  return (
    <>
      <div className="my-4">
        <div className="text-sm text-slate-700">{label}</div>
        <div className="text-xl">{data}</div>
      </div>
      <Divider />
    </>
  );
}

interface ScheduleProps {
  data: KeyDate | null;
}

function Schedule({ data }: ScheduleProps) {
  if (!data) return null;
  const getSimpleDate = (d: any) => (d ? moment(d).format("MM/DD") : "-");
  return (
    <div>
      <div className="flex justify-between">
        <Item label="C/S" data={data?.case} />
        <Item label="m3" data={data?.case} />
        <Item label="出荷方法" data={data?.shipType} />
      </div>
      <div className="flex justify-between">
        <Item label="入荷" data={getSimpleDate(data?.stockingDate)} />
        <Item label="梱包" data={getSimpleDate(data?.packagingDate)} />
        <Item label="出荷" data={getSimpleDate(data?.shippingDate)} />
        <Item label="CUT" data={getSimpleDate(data?.cutDate)} />
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { project } = useProject();

  return (
    <div className="p-4">
      <Item label="案件名" data={project?.name} />
      <Item label="お得意様" data={project?.accountName} />
      <Item label="注意事項" data={project?.alert} />
      <Item label="フェーズ" data={getStatusText(project?.status)} />
      {project?.schedules && project.schedules.items.length > 0 && (
        <Item
          label="スケジュール"
          data={
            <Accordion
              items={project?.schedules?.items.map((schedule, idx: number) => ({
                key: `${schedule?.name}_${idx}`,
                title: `${schedule?.name}`,
                content: <Schedule data={schedule} />,
              }))}
            />
          }
        />
      )}
    </div>
  );
}
