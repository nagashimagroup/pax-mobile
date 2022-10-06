import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ReactNode, useState, MouseEvent } from "react";
import Menu from "components/Menu";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Action {
  icon?: any;
  label: string;
  onClick: () => void;
}

interface CardProps {
  title: string;
  subtitle?: string;
  status?: string;
  statusColor?: string;
  content: ReactNode | ReactNode[] | string | string[];
  extra: ReactNode | ReactNode[] | string | string[];
  actions: Action[] | undefined | null | false;
}

export default function BasicCard({
  title,
  subtitle,
  status,
  statusColor,
  content,
  extra,
  actions,
}: CardProps) {
  const [expanded, setExpanded] = useState(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setOpenMenu(true);
    setAnchor(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
    setAnchor(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "100%" }}>
      {actions && (
        <Menu
          open={openMenu}
          anchor={anchor}
          menus={actions}
          onClose={handleCloseMenu}
        />
      )}
      <CardHeader
        avatar={
          status && (
            <Avatar sx={{ bgcolor: statusColor }} aria-label="status">
              {status}
            </Avatar>
          )
        }
        action={
          actions && (
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={title}
        subheader={subtitle}
      />
      <CardContent>{content}</CardContent>
      {extra && (
        <>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>{extra}</CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
}
