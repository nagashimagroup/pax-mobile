/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, ReactElement, Ref, useEffect } from "react";
import { useRouter } from "next/router";
import SwipeableViews from "react-swipeable-views";
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
import { getImageKeyBySize } from "utils/image";
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
}

export default function Preview({ open, hideImage }: PreviewProps) {
  const router = useRouter();
  const {
    images,
    currentIndex,
    setCurrentIndex,
    previewSize,
    getImageName,
    label,
    downloadImages,
    deleteImages,
  } = useImages();

  useEffect(() => {
    hideImage();
    window.onpopstate = () => {
      history.go(1);
    };
    return () => router.beforePopState(() => true);
  }, [router]);

  const deleteFile = async () => {
    const fileKey = images[currentIndex].key;
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
      <div className="px-4 py-2 fixed top-0 left-0 w-full z-[100] bg-transparent text-white flex justify-between items-center">
        <IconButton
          edge="start"
          color="inherit"
          onClick={hideImage}
          aria-label="close"
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          {`${label} ${currentIndex + 1}/${images.length}`}
        </Typography>
        <IconButton color="inherit" onClick={deleteFile} aria-label="close">
          <DeleteIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => downloadImages([images[currentIndex].key])}
          aria-label="close"
        >
          <DownloadIcon />
        </IconButton>
      </div>
      <SwipeableViews
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
          overflow: "hidden",
        }}
        index={currentIndex}
        onChangeIndex={setCurrentIndex}
      >
        {images.map((img) => (
          <div
            key={img.key}
            className="h-screen relative overflow-hidden flex flex-col justify-center items-center"
          >
            <div>
              <AmplifyS3Image
                imgKey={getImageKeyBySize(img.key, previewSize)}
                alt={getImageName(img) || ""}
              />
            </div>
            <div className="w-screen absolute bottom-3 left-3 text-white">
              <h2 className="mb-2 font-bold">
                {moment(img.lastModified).format("YYYY年MM月DD日・HH:mm:ss")}
              </h2>
            </div>
          </div>
        ))}
      </SwipeableViews>
    </Dialog>
  );
}
