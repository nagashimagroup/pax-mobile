import { useProject } from "contexts/project";
import { useRouter } from "next/router";
import Tabs from "components/Tabs";
import ProjectDetail from "./Detail";
import StockPage from "./Stock";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import { getStatusFromTabIndex, getTabIndex } from "utils/status";

function Project() {
  const [tabIndex, setTabIndex] = useState(0);
  const { loading, project } = useProject();
  const router = useRouter();

  const { status } = router.query;

  useEffect(() => {
    setTabIndex(getTabIndex(status as any));
  }, [status]);

  if (loading) return <LinearProgress color="secondary" />;

  if (!project) return <div />;

  const onTabChange = (index: number) => {
    router.push(
      `/projects/${project.id}?status=${getStatusFromTabIndex(index)}`,
      undefined,
      { shallow: true }
    );
  };

  return (
    <Tabs
      index={tabIndex}
      onTabClick={onTabChange}
      tabs={[
        { title: "詳細", content: <ProjectDetail /> },
        { title: "入荷", content: <StockPage /> },
        { title: "梱包", content: "梱包" },
        { title: "出荷", content: "出荷" },
      ]}
    />
  );
}

export default Project;
