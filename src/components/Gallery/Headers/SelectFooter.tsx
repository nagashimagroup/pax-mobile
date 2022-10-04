import Slide from "@mui/material/Slide";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useImages } from "contexts/images";

export function SelectFooter() {
  const {
    mode,
    setMode,
    setSelectedImages,
    deleteSelectedImages,
    downloadSelectedImages,
  } = useImages();
  return (
    <Slide direction="up" appear={false} in={mode === "select"}>
      <div className="fixed z-[999] bottom-0 inset-x-0">
        <BottomNavigation showLabels className="w-screen bg-slate-800">
          <BottomNavigationAction
            onClick={downloadSelectedImages}
            label="ダウンロード"
            icon={<DownloadIcon />}
            className="text-white"
          />
          <BottomNavigationAction
            onClick={deleteSelectedImages}
            label="削除"
            icon={<DeleteIcon />}
            className="text-white"
          />
          <BottomNavigationAction
            onClick={() => {
              setMode("gallery");
              setSelectedImages([]);
            }}
            label="キャンセル"
            icon={<CloseIcon />}
            className="text-white"
          />
        </BottomNavigation>
      </div>
    </Slide>
  );
}

export default SelectFooter;
