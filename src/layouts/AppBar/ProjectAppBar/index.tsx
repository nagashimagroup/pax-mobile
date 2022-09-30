import { useProject } from "contexts/project";
import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import QrScanner from "components/QrScanner";

export function ProjectAppBar() {
  const { project } = useProject();
  const [showQrScan, setShowQr] = useState(false);

  return (
    <>
      <QrScanner open={showQrScan} setOpen={setShowQr} />
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
          <IconButton color="inherit" onClick={() => setShowQr(true)}>
            <QrCodeScannerIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
