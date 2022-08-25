import type { Project } from "API";
import { useProjects } from "contexts/projects";
import { getStatusInitial, getStatusColor } from "utils/status";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function StatusCircle({ status }: { status: Project["status"] }) {
  return (
    <div
      className="w-14 h-14 mr-2 flex justify-center items-center rounded-full text-white"
      style={{ backgroundColor: getStatusColor(status) }}
    >
      {getStatusInitial(status)}
    </div>
  );
}

function Item({ project }: { project: Project }) {
  return (
    <>
      <ListItemButton>
        <StatusCircle status={project.status} />
        <ListItemText
          primary={project.name}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {project.accountName}
              </Typography>
              {project.alert}
            </>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </>
  );
}

function ProjectList() {
  const { loading, projects } = useProjects();

  if (loading) return <LinearProgress color="secondary" />;

  if (!projects) return <div />;

  return (
    <List>
      {projects.map((project) => (
        <Item key={project.id} project={project} />
      ))}
    </List>
  );
}

export default ProjectList;
