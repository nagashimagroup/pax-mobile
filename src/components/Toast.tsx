import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type Severity = "error" | "warning" | "info" | "success";

export interface ToastProps {
  message: string;
  open: boolean;
  onClose: () => void;
  vertical?: "top" | "bottom";
  horizontal?: "center" | "left" | "right";
  severity: Severity;
}

export default function Toast({
  message,
  open,
  onClose,
  vertical,
  horizontal,
  severity,
}: ToastProps) {
  return (
    <Snackbar
      sx={{ position: "fixed" }}
      anchorOrigin={{
        vertical: vertical || "top",
        horizontal: horizontal || "center",
      }}
      open={open}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
