/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, ReactElement, Ref, useEffect } from "react";
import { useRouter } from "next/router";
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { Storage } from "aws-amplify";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import moment from "moment";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface S3Image {
  key: string;
  lastModified: Date;
}

interface PreviewProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  fileList: S3Image[] | [];
  setFileList: (images: S3Image[]) => void;
  fileIdx: number;
  label: string | undefined;
  updateCallback?: (fileList: S3Image[]) => void;
}

const getLgImageKey = (key: string) => {
  let newKey = key
    .replace("/xs_", "/lg_")
    .replace("/sm_", "/lg_")
    .replace("/md_", "/lg_");
  if (!newKey.includes("/lg_")) {
    const imgName = newKey.split("/").at(-1);
    if (!imgName) return newKey;
    newKey = newKey.replace(imgName, `lg_${imgName}`);
  }
  return newKey;
};

export default function Preview({
  open,
  setOpen,
  fileList,
  setFileList,
  fileIdx,
  label,
  updateCallback,
}: PreviewProps) {
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
    window.onpopstate = () => {
      history.go(1);
    };
    return () => router.beforePopState(() => true);
  }, [router]);

  const downloadFile = async () => {
    const file = (await Storage.get(fileList[fileIdx].key, {
      download: true,
    })) as any;
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(file.Body);
    link.download = fileList[fileIdx].key.split("/").at(-1) as string;
    document.body.append(link);
    link.click();
    link.remove();
  };

  const deleteFile = async () => {
    const fileKey = fileList[fileIdx].key;
    const newFileList = fileList.filter(
      (f: { key: string }) => f.key !== fileKey
    );
    setFileList(newFileList);
    handleClose();

    const lgFileKey = getLgImageKey(fileKey);

    const delProm = [
      Storage.remove(lgFileKey),
      Storage.remove(lgFileKey.replace("/lg_", "/xs_")),
      Storage.remove(lgFileKey.replace("/lg_", "/sm_")),
      Storage.remove(lgFileKey.replace("/lg_", "/md_")),
    ];

    await Promise.all(delProm);
    if (updateCallback) updateCallback(newFileList);
  };

  if (!fileList[fileIdx]) return null;

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
          {label}
        </Typography>
        <IconButton color="inherit" onClick={deleteFile} aria-label="close">
          <DeleteIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          onClick={downloadFile}
          aria-label="close"
        >
          <DownloadIcon />
        </IconButton>
      </div>
      <div className="fixed inset-0 bg-black flex flex-col justify-center items-start text-white">
        <AmplifyS3Image
          imgKey={getLgImageKey(fileList[fileIdx].key)}
          alt={getLgImageKey(fileList[fileIdx].key).split("/").at(-1)}
        />
        <h2 className="m-2 font-bold">
          {moment(fileList[fileIdx].lastModified).format(
            "YYYY年MM月DD日・HH:mm:ss"
          )}
        </h2>
        <h2 className="ml-2">{fileList[fileIdx].key.split("/").at(-1)}</h2>
      </div>
    </Dialog>
  );
}
