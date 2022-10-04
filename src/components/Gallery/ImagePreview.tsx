/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, ReactElement, Ref, useEffect } from "react";
import { useRouter } from "next/router";
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import moment from "moment";
import { getImageKeyBySize, deleteImages, S3Image } from "utils/image";
import { useImages } from "contexts/images";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface PreviewProps {
  open: boolean;
  hideImage: () => void;
  currentImage: S3Image;
}

export default function Preview({
  open,
  hideImage,
  currentImage,
}: PreviewProps) {
  const router = useRouter();
  const {
    images,
    currentIndex,
    label,
    getImageName,
    downloadImages,
    previewSize,
  } = useImages();

  useEffect(() => {
    hideImage();
    window.onpopstate = () => {
      history.go(1);
    };
    return () => router.beforePopState(() => true);
  }, [router]);

  const deleteFile = async () => {
    const fileKey = currentImage.key;
    hideImage();
    deleteImages([fileKey]);
  };

  if (!images[currentIndex]) return null;

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={hideImage}
      TransitionComponent={Transition}
    >
      <div className="px-4 py-2 fixed top-0 left-0 w-full z-[100] bg-transparent text-white flex jusstify-between items-center">
        <IconButton
          edge="start"
          color="inherit"
          onClick={hideImage}
          aria-label="close"
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          {label}
        </Typography>
        <IconButton color="inherit" onClick={deleteFile} aria-label="close">
          <DeleteIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => downloadImages([currentImage.key])}
          aria-label="close"
        >
          <DownloadIcon />
        </IconButton>
      </div>
      <div className="fixed inset-0 bg-black flex flex-col justify-center items-start text-white">
        <AmplifyS3Image
          imgKey={getImageKeyBySize(currentImage.key, previewSize)}
          alt={getImageName(currentImage) || ""}
        />
        <h2 className="m-2 font-bold">
          {moment(currentImage.lastModified).format("YYYY年MM月DD日・HH:mm:ss")}
        </h2>
        <h2 className="ml-2">{getImageName(currentImage)}</h2>
      </div>
    </Dialog>
  );
}
