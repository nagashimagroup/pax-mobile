import type { Project } from "API";
import { useProject } from "contexts/project";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function Project() {
  const { loading, project } = useProject();

  if (loading) return <LinearProgress color="secondary" />;

  if (!project) return <div />;

  return (
    <Typography
      sx={{
        display: "inline",
      }}
      component="span"
      variant="body2"
      color="text.primary"
    >
      {project.accountName}
    </Typography>
  );
}

export default Project;
