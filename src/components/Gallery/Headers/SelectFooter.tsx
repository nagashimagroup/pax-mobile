import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useSelectedImages } from "contexts/selectedImages";

export function SelectFooter() {
  const {
    mode,
    setMode,
    setSelectedImages,
    downloadSelectedImages,
    deleteSelectedImages,
  } = useSelectedImages();
  return (
    <Slide direction="up" appear={false} in={mode === "select"}>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation showLabels sx={{ background: "#1E313B" }}>
          <BottomNavigationAction
            onClick={downloadSelectedImages}
            label="ダウンロード"
            icon={<DownloadIcon />}
            sx={{ color: "white" }}
          />
          <BottomNavigationAction
            onClick={deleteSelectedImages}
            label="削除"
            icon={<DeleteIcon />}
            sx={{ color: "white" }}
          />
          <BottomNavigationAction
            onClick={() => {
              setMode("gallery");
              setSelectedImages([]);
            }}
            label="キャンセル"
            icon={<CloseIcon />}
            sx={{ color: "white" }}
          />
        </BottomNavigation>
      </Paper>
    </Slide>
  );
}

export default SelectFooter;
