import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import WidgetsIcon from "@mui/icons-material/Widgets";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import QrScanner from "components/QrScanner";
import { useProduct } from "contexts/product";

interface AppBarProps {
  open?: boolean;
  toggleDrawer: () => void;
}

export function ProductAppBar({ toggleDrawer }: AppBarProps) {
  const { currentCase } = useProduct();
  const [showQrScan, setShowQr] = useState(false);

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
            <WidgetsIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {currentCase?.name}
          </Typography>
          <IconButton color="inherit" onClick={() => setShowQr(true)}>
            <QrCodeScannerIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
