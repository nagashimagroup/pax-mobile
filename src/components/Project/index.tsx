import { useProject } from "contexts/project";
import Tabs from "components/Tabs";
import ProjectDetail from "./Detail";
import LinearProgress from "@mui/material/LinearProgress";

function Project() {
  const { loading, project } = useProject();

  if (loading) return <LinearProgress color="secondary" />;

  if (!project) return <div />;

  return (
    <Tabs
      tabs={[
        { title: "詳細", content: <ProjectDetail /> },
        { title: "入荷", content: "入荷" },
        { title: "梱包", content: "梱包" },
        { title: "出荷", content: "出荷" },
      ]}
    />
  );
}

export default Project;
