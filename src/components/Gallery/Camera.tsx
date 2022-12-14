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
import { useImages } from "contexts/images";
import { useRouter } from "next/router";
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
import { shortHaptic } from "utils/haptic";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CameraProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface ImageFile {
  src: string;
  file: File;
}

const videoConstraints = {
  facingMode: "environment",
  width: 720,
  height: 720,
};

export default function Camera({ open, setOpen, ...webCamProps }: CameraProps) {
  const router = useRouter();
  const { label, saveImages } = useImages();
  const [enableCamera, setEnableCamera] = useState<boolean>(open);
  const webcamRef = useRef<Webcam>(null);
  const [imageFiles, setImageFiles] = useState<ImageFile[] | []>([]);

  useEffect(() => {
    return () => setEnableCamera(false);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.onpopstate = () => {
      history.go(1);
    };
    return () => router.beforePopState(() => true);
  }, [router]);

  useEffect(() => {
    setEnableCamera(open);
    if (!open) setImageFiles([]);
  }, [open]);

  const handleClose = () => {
    router.push(
      router.asPath.replace("&camera=true", "&camera=false"),
      undefined,
      { shallow: true }
    );
    setOpen(false);
  };

  const removeImage = (name: string) => {
    shortHaptic();
    const newFiles = imageFiles.filter((f) => f.file.name !== name);
    setImageFiles(newFiles);
  };

  const uploadImages = () => {
    saveImages(imageFiles.map((f) => f.file));
    handleClose();
  };

  const capture = useCallback(() => {
    shortHaptic();
    const image = webcamRef?.current?.getScreenshot();
    if (image) {
      const buffer = decodeBase64(image);

      const imgFile = new File([buffer.buffer], `${short().new()}.jpeg`, {
        type: "image/jpeg",
      });

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
          {label ? `${label}?????????` : "??????"}
        </Typography>
      </div>
      <div className="fixed inset-0 bg-black flex flex-col justify-center items-center text-white">
        <Webcam
          audio={false}
          className="w-full max-w-lg aspect-square"
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
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
          <div className="w-full grid grid-cols-3 items-center my-4">
            <IconButton
              onClick={handleClose}
              className="flex flex-col justify-center items-center"
            >
              <ArrowBackIcon
                sx={{ fontSize: "10vw" }}
                className="text-white text-[10vw] sm:text-[6vw] md:text-[28px]"
              />
              <span className="text-white text-[8px]">???????????????</span>
            </IconButton>
            <IconButton onClick={capture}>
              <CaptureIcon
                sx={{ fontSize: "20vw" }}
                className="text-white text-[20vw] sm:text-[14vw] md:text-[64px]"
              />
            </IconButton>
            <IconButton
              onClick={uploadImages}
              className="flex flex-col justify-center items-center"
            >
              <UploadIcon
                sx={{ fontSize: "10vw" }}
                className="text-white text-[10vw] sm:text-[6vw] md:text-[28px]"
              />
              <span className="text-white text-[8px]">??????????????????</span>
            </IconButton>
          </div>
        </div>
      )}
    </Dialog>
  );
}
