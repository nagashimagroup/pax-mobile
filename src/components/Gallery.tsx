/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import CircularProgress from "@mui/material/CircularProgress";
import { Storage } from "aws-amplify";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import AddPhotoIcon from "@mui/icons-material/AddPhotoAlternate";
import CameraIcon from "@mui/icons-material/CameraAlt";
import Preview from "./ImagePreview";
import Camera from "./Camera";

interface S3Image {
  key: string;
  lastModified: Date;
}

interface GalleryProps {
  label?: string;
  path: string;
  fileType: string;
}

const isImage = (file: S3Image) => {
  if (!file) return false;
  const ext = file.key.split(".")[1];
  if (!ext) return false;
  if (
    [
      "jpeg",
      "jpg",
      "png",
      "jpe",
      "jif",
      "gif",
      "webp",
      "tiff",
      "tif",
      "bmp",
      "svg",
      "ai",
    ].includes(ext.toLowerCase())
  ) {
    return true;
  }
  return false;
};

export default function Gallery({ label, path, fileType }: GalleryProps) {
  const [fileList, setFileList] = useState<S3Image[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [openCamera, setOpenCamera] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    setLoading(true);
    const res = await Storage.list(path);
    setFileList(res as S3Image[]);
    setLoading(false);
  };

  const saveFiles = async ({
    target: { files },
  }: ChangeEvent<HTMLInputElement> | { target: { files: File[] } }) => {
    if (!files) return;
    setUploading(true);
    const promises = Object.values(files).map((file) =>
      Storage.put(`${path}/${file.name}`, file)
    );
    const newFiles = (await Promise.all(promises)) as S3Image[];
    setFileList([...fileList, ...newFiles]);
    setUploading(false);
  };

  const showImage = (idx: number) => {
    setCurrentIdx(idx);
    setShowPreview(true);
  };

  return (
    <div className="w-full overflow-y-scroll">
      <Preview
        label={label}
        fileList={fileList}
        setFileList={setFileList}
        fileIdx={currentIdx}
        open={showPreview}
        setOpen={setShowPreview}
      />
      <Camera open={openCamera} setOpen={setOpenCamera} onUpload={saveFiles} />
      {label && (
        <div className="p-4 w-full sticky top-0 flex items-center text-sm">
          <div className="text-slate-700 mr-4">{label}</div>
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
        </div>
      )}
      {loading ? (
        <div className="w-full h-24 flex justify-center items-center">
          <CircularProgress size={50} />
        </div>
      ) : (
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1">
          {fileList.map((file: S3Image, idx: number) => (
            <div
              key={file.key}
              onClick={() => showImage(idx)}
              className="w-full aspect-square overflow-hidden object-cover bg-slate-400 flex justify-center items-center"
            >
              <AmplifyS3Image
                style={{ width: "100%" }}
                imgKey={file.key}
                alt={file.key.split("/").at(-1)}
              />
            </div>
          ))}
          <input
            type="file"
            multiple
            accept={fileType}
            ref={inputRef}
            onChange={saveFiles}
            className="hidden"
          />
          <div
            onClick={() => setOpenCamera(true)}
            className="w-full aspect-square text-white text-[0.8rem] p-2 bg-slate-800 flex flex-col justify-center items-center text-center"
          >
            {uploading ? (
              <CircularProgress />
            ) : (
              <>
                <CameraIcon />
                {label ? `${label}を撮影` : "撮影"}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
