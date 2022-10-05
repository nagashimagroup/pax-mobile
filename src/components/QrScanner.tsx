/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, useCallback, useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import QrScanner from "qr-scanner";
import { useRouter } from "next/router";
import { useAlerts } from "contexts/alerts";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

interface QrReaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function QrReader({ open, setOpen }: QrReaderProps) {
  const [scanner, setScanner] = useState<any>(null);
  const { addAlert } = useAlerts();

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    scanner?.stop();
  };

  const startScan = useCallback((videoRef: HTMLVideoElement) => {
    if (!videoRef) return;

    const qrScanner = new QrScanner(
      videoRef,
      (result: any) => {
        try {
          const data = JSON.parse(result.data);
          qrScanner.stop();
          setOpen(false);
          if (data.case && data.product) {
            return router.push(
              `/products/${data.product}?cs=${data.case}&camera=true`
            );
          } else if (data.project && data.product) {
            router.push(`/projects/${data.project}?product=${data.product}`);
          } else if (data.project) {
            router.push(`/projects/${data.project}`);
          } else {
            addAlert({ message: "無効なQRコードです", severity: "warning" });
          }
        } catch (e) {
          addAlert({ message: "無効なQRコードです", severity: "warning" });
          console.error(e);
        }
      },
      { highlightScanRegion: true, highlightCodeOutline: true }
    );

    setScanner(qrScanner);

    qrScanner.start();
  }, []);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            QRコード
          </Typography>
          <IconButton color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="fixed inset-0 bg-black overflow-hidden object-cover">
        <video className="h-screen mx-auto" ref={startScan} />
      </div>
    </Dialog>
  );
}
