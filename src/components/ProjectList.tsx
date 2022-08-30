import Link from "next/link";
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
      className="w-full h-full flex justify-center items-center rounded-full text-white"
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
        <div className="mr-2 w-14 aspect-square">
          <StatusCircle status={project.status} />
        </div>
        <ListItemText
          className="w-full overflow-hidden truncate"
          primary={project.name}
          secondary={
            <Typography
              sx={{
                display: "inline",
              }}
              component="span"
              variant="body2"
              color="text.secondary"
            >
              {project.accountName}
            </Typography>
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
        <Link key={project.id} href={`projects/${project.id}`} passHref>
          <a>
            <Item project={project} />
          </a>
        </Link>
      ))}
    </List>
  );
}

export default ProjectList;
