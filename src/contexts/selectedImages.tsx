/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, createContext, useContext, useState } from "react";
import { useLongPress } from "use-long-press";
import {
  S3Image,
  getImageKeyBySize,
  ImageSize,
  getImageNameFromKey,
  deleteImages,
} from "utils/image";
import { downloadFile } from "utils/files";
import { Storage } from "aws-amplify";

type Mode = "gallery" | "select";

interface SelectedImage {
  key: string;
  downloadSize?: ImageSize;
}

interface SelectedImagesContextValue {
  isSelected: (img: S3Image) => boolean;
  bind: any;
  mode: Mode;
  setMode: (mode: Mode) => void;
  selectedImages: SelectedImage[];
  setSelectedImages: (imgs: SelectedImage[]) => void;
  deletedImages: string[];
  downloadSelectedImages: () => void;
  downloadImages: (imgs: SelectedImage[]) => void;
  deleteSelectedImages: () => void;
}

const SelectedImagesContext = createContext<SelectedImagesContextValue>({
  isSelected: () => false,
  bind: null,
  mode: "gallery",
  setMode: () => null,
  selectedImages: [],
  setSelectedImages: () => null,
  deletedImages: [],
  downloadImages: () => null,
  downloadSelectedImages: () => null,
  deleteSelectedImages: () => null,
});

interface SelectedImagesProviderProps {
  children: ReactNode;
}

export const SelectedImagesProvider = ({
  children,
}: SelectedImagesProviderProps) => {
  const [mode, setMode] = useState<Mode>("gallery");
  const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([]);
  const [deletedImages, setDeletedImages] = useState<string[]>([]);

  const bind = useLongPress(
    (e) => {
      if (mode === "select") return;
      window.navigator.vibrate([20]);
      setMode("select");
      e.preventDefault();
      e.stopPropagation();
    },
    {
      threshold: 200,
    }
  );

  const downloadImages = async (imgs: SelectedImage[]) => {
    if (imgs.length === 1) {
      const file = (await Storage.get(
        getImageKeyBySize(imgs[0].key, imgs[0].downloadSize),
        {
          download: true,
        }
      )) as any;
      await downloadFile(getImageNameFromKey(imgs[0].key) as string, file.Body);
    }
  };

  const downloadSelectedImages = async () => {
    downloadImages(selectedImages);
    setMode("gallery");
  };

  const isSelected = (img: S3Image) => {
    const imgKeys = selectedImages.map((i) => i.key);
    return mode === "select" && imgKeys.includes(img.key);
  };

  const deleteSelectedImages = () => {
    const imgKeys = selectedImages.map((s) => s.key);
    deleteImages(imgKeys);
    setDeletedImages([...deletedImages, ...imgKeys]);
    setSelectedImages([]);
    setMode("gallery");
  };

  return (
    <SelectedImagesContext.Provider
      value={{
        isSelected,
        bind,
        mode,
        setMode,
        selectedImages,
        setSelectedImages,
        downloadImages,
        downloadSelectedImages,
        deletedImages,
        deleteSelectedImages,
      }}
    >
      {children}
    </SelectedImagesContext.Provider>
  );
};

export const useSelectedImages = () => {
  const selectedImagesContext = useContext(SelectedImagesContext);

  if (selectedImagesContext === undefined) {
    throw new Error("useSelectedImages must be within SelectedImagesProvider");
  }

  return selectedImagesContext;
};
