import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountIcon from "@mui/icons-material/AccountCircle";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { useAuth } from "contexts/auth";
import QrScanner from "components/QrScanner";

interface AppBarProps {
  open?: boolean;
  toggleDrawer: () => void;
}

export function HomeAppBar({ toggleDrawer }: AppBarProps) {
  const { currentGroup } = useAuth();
  const [showQrScan, setShowQr] = useState(false);

  if (!currentGroup)
    return (
      <div className="h-screen flex justify-center items-center">
        グループに所属されていません
      </div>
    );

  return (
    <>
      <QrScanner open={showQrScan} setOpen={setShowQr} />
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
          <IconButton color="inherit" onClick={() => setShowQr(true)}>
            <QrCodeScannerIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
