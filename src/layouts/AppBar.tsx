import { useProject } from "contexts/project";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { useAuth } from "contexts/auth";

interface PaxAppBarProps {
  open?: boolean;
  toggleDrawer: () => void;
}

export default function PaxAppBar({ open, toggleDrawer }: PaxAppBarProps) {
  const { currentGroup } = useAuth();
  if (!currentGroup)
    return (
      <div className="h-screen flex justify-center items-center">
        グループに所属されていません
      </div>
    );

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "1rem",
          }}
        >
          <AccountIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {currentGroup.name}
        </Typography>
        <IconButton color="inherit" onClick={() => null}>
          <QrCodeScannerIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export function ProjectAppBar() {
  const { project } = useProject();

  return (
    <AppBar>
      <Toolbar>
        <Link href="/">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{
              marginRight: "1rem",
            }}
          >
            <HomeIcon />
          </IconButton>
        </Link>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {project?.name}
        </Typography>
        <IconButton color="inherit" onClick={() => null}>
          <QrCodeScannerIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
