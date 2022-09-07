/* eslint-disable react-hooks/exhaustive-deps */
import {
  useRef,
  ReactElement,
  forwardRef,
  useState,
  useCallback,
  useEffect,
  Ref,
} from "react";
import short from "short-uuid";
import Webcam from "react-webcam";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Close";
import CaptureIcon from "@mui/icons-material/RadioButtonChecked";
import UploadIcon from "@mui/icons-material/CloudUpload";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { decodeBase64 } from "utils/files";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CameraProps {
  label?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onUpload: (event: { target: { files: File[] } }) => void;
}

interface ImageFile {
  src: string;
  file: File;
}

export default function Camera({
  label,
  open,
  setOpen,
  onUpload,
  ...webCamProps
}: CameraProps) {
  const [enableCamera, setEnableCamera] = useState<boolean>(open);
  const webcamRef = useRef<Webcam>(null);
  const [imageFiles, setImageFiles] = useState<ImageFile[] | []>([]);

  useEffect(() => {
    return () => setEnableCamera(false);
  }, []);

  useEffect(() => {
    setEnableCamera(open);
    if (!open) setImageFiles([]);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const removeImage = (name: string) => {
    const newFiles = imageFiles.filter((f) => f.file.name !== name);
    setImageFiles(newFiles);
  };

  const uploadImages = () => {
    onUpload({
      target: {
        files: imageFiles.map((f) => f.file),
      },
    });
    handleClose();
  };

  const capture = useCallback(() => {
    const image = webcamRef?.current?.getScreenshot();
    if (image) {
      const buffer = decodeBase64(image);

      const imgFile = new File(
        [buffer.buffer],
        `${label}_${short.generate()}.jpeg`,
        {
          type: "image/jpeg",
        }
      );

      const newFiles = [...imageFiles, { src: image, file: imgFile }];

      setImageFiles(newFiles);
    }
  }, [webcamRef, imageFiles]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <div className="px-4 py-2 fixed top-0 left-0 w-full z-[100] bg-transparent text-white flex jusstify-between items-center">
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          {label ? `${label}の撮影` : "撮影"}
        </Typography>
      </div>
      <div className="fixed inset-0 bg-black flex flex-col justify-center items-center text-white">
        <Webcam
          audio={false}
          className="w-full max-w-md aspect-square"
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          forceScreenshotSourceSize
          {...webCamProps}
        />
      </div>
      {enableCamera && (
        <div className="fixed z-[110] bottom-0 w-full">
          <div className="overflow-x-auto flex gap-1">
            {imageFiles.length > 0 &&
              imageFiles.map(({ src, file: { name } }) => (
                <div
                  key={name}
                  className="flex-none relative h-14 w-14 overflow-visible"
                >
                  <DeleteIcon
                    className="absolute top-0.5 right-0.5 bg-black text-white opacity-50 text-sm rounded-full shadow"
                    onClick={() => {
                      removeImage(name);
                    }}
                  />

                  <img src={src} alt={name} className="h-full" />
                </div>
              ))}
          </div>
          <div className="w-full grid grid-cols-3 items-center">
            <IconButton
              onClick={handleClose}
              className="flex flex-col justify-center items-center"
            >
              <ArrowBackIcon className="text-white text-4xl" />
              <span className="text-white text-[0.7rem]">キャンセル</span>
            </IconButton>
            <IconButton onClick={capture}>
              <CaptureIcon className="text-white text-7xl" />
            </IconButton>
            <IconButton
              onClick={uploadImages}
              className="flex flex-col justify-center items-center"
            >
              <UploadIcon className="text-white text-4xl" />
              <span className="text-white text-[0.7rem]">アップロード</span>
            </IconButton>
          </div>
        </div>
      )}
    </Dialog>
  );
}
