import Slide from "@mui/material/Slide";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useSelectedImages } from "contexts/selectedImages";
import { useImages } from "contexts/images";

export function SelectFooter() {
  const {
    mode,
    setMode,
    setSelectedImages,
    selectedImages,
    downloadSelectedImages,
  } = useSelectedImages();
  const { deleteImages } = useImages();
  return (
    <Slide direction="up" appear={false} in={mode === "select"}>
      <BottomNavigation
        showLabels
        className="fixed z-[999] bottom-0 inset-x-0 w-full bg-slate-800"
      >
        <BottomNavigationAction
          onClick={downloadSelectedImages}
          label="ダウンロード"
          icon={<DownloadIcon />}
          className="text-white"
        />
        <BottomNavigationAction
          onClick={() => deleteImages(selectedImages.map((s) => s.key))}
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
    </Slide>
  );
}

export default SelectFooter;
