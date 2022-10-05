import { useImages } from "contexts/images";
import { useSelectedImages } from "contexts/selectedImages";
import { ChangeEvent, useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CameraIcon from "@mui/icons-material/CameraAlt";
import AddPhotoIcon from "@mui/icons-material/AddPhotoAlternate";

interface GalleryHeaderProps {
  showTitle?: boolean;
  showHeaderButton?: boolean;
  showFileUploadButton?: boolean;
}

export function GalleryHeader({
  showHeaderButton,
  showFileUploadButton,
  showTitle,
}: GalleryHeaderProps) {
  const { uploading, label, setOpenCamera, fileType, saveImages } = useImages();
  const { mode } = useSelectedImages();
  const inputRef = useRef<HTMLInputElement>(null);

  if (mode === "select")
    return (
      <div className="py-4 w-full sticky top-0 flex items-center text-sm">
        <div className="text-slate-700 mr-4">{label}選択</div>
      </div>
    );

  return (
    <div className="py-4 w-full sticky top-0 flex items-center text-sm">
      {label && showTitle && <div className="text-slate-700 mr-4">{label}</div>}
      {showHeaderButton && (
        <button
          type="button"
          onClick={() => setOpenCamera(true)}
          className="px-4 py-1 flex items-center mr-4 bg-slate-800 text-white rounded-lg"
        >
          {uploading ? (
            <CircularProgress size={20} sx={{ color: "white" }} />
          ) : (
            <>
              <CameraIcon sx={{ fontSize: "1.2rem" }} />
              撮影
            </>
          )}
        </button>
      )}
      {showFileUploadButton && (
        <button
          type="button"
          onClick={() => inputRef.current && inputRef.current.click()}
          className="px-4 py-1 flex items-center bg-slate-800 text-white rounded-lg"
        >
          {uploading ? (
            <CircularProgress size={20} sx={{ color: "white" }} />
          ) : (
            <>
              <AddPhotoIcon sx={{ fontSize: "1.2rem" }} />
              追加
            </>
          )}
        </button>
      )}
      <input
        type="file"
        multiple
        accept={fileType}
        ref={inputRef}
        onChange={(
          e:
            | ChangeEvent<HTMLInputElement>
            | { target: { files: File[] | FileList } }
        ) => e.target && e.target.files && saveImages(e.target.files)}
        className="hidden"
      />
    </div>
  );
}
export default GalleryHeader;
