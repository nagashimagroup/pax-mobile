/* eslint-disable react-hooks/exhaustive-deps */
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import {
  S3Image,
  deleteImages,
  getImageKeyBySize,
  ImageSize,
} from "utils/image";
import { useSelectedImages } from "./selectedImages";
import { Storage } from "aws-amplify";
import Preview from "components/Gallery/ImagePreview";
import Camera from "components/Gallery/Camera";

interface ImagesContextValue {
  loading: boolean;
  images: S3Image[];
  uploading: boolean;
  fileType: string;
  getImageName: (img: S3Image) => string | null;
  showImage: (idx: number) => void;
  previewSize?: ImageSize;
  label: string | null | undefined;
  setOpenCamera: (open: boolean) => void;
  currentIndex: number;
  setCurrentIndex: (idx: number) => void;
  saveImages: (files: File[] | FileList) => void;
  deleteImages: (imgKeys: string[]) => void;
  downloadImages: (imgKeys: string[]) => void;
}

const ImagesContext = createContext<ImagesContextValue>({
  images: [],
  loading: false,
  uploading: false,
  fileType: "images/*",
  getImageName: () => null,
  showImage: () => null,
  label: "",
  previewSize: undefined,
  setOpenCamera: () => null,
  currentIndex: 0,
  setCurrentIndex: () => null,
  saveImages: () => null,
  deleteImages: () => null,
  downloadImages: () => null,
});

interface ImagesProviderProps {
  children: ReactNode;
  path: string;
  fileType: string;
  size?: ImageSize;
  previewSize?: ImageSize;
  label?: string;
  updateCallback?: (images: S3Image[]) => void;
  startCamera?: boolean;
  expectedNumImgs?: number;
}

const downloadFile = async (fileName: string, blob: Blob | MediaSource) => {
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
};

const getImageName = (img: S3Image) => {
  return getImageNameFromKey(img.key);
};

const getImageNameFromKey = (key: string | null) => {
  if (!key) return null;
  const fileName = key.split("/").at(-1);
  if (!fileName) return key;
  return fileName
    .replace("lg_", "")
    .replace("md_", "")
    .replace("sm_", "")
    .replace("xs_", "");
};

export const ImagesProvider = ({
  children,
  path,
  fileType,
  size,
  previewSize,
  label,
  updateCallback,
  startCamera,
  expectedNumImgs,
}: ImagesProviderProps) => {
  const { deletedImages } = useSelectedImages();
  const [images, setImages] = useState<S3Image[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [openCamera, setOpenCamera] = useState<boolean>(startCamera || false);

  useEffect(() => {
    loadImages(setLoading, 100);
  }, []);

  useEffect(() => {
    if (deletedImages.length === 0) return;
    const newImages = images.filter(
      (f: { key: string }) => !deletedImages.includes(f.key)
    );
    setImages(newImages);
    if (updateCallback) updateCallback(newImages);
  }, [deletedImages]);

  useEffect(() => {
    if (!startCamera) return;
    setOpenCamera(true);
  }, [startCamera]);

  useEffect(() => {
    if (!openCamera) return;
    window.navigator.vibrate([100]);
  }, [openCamera]);

  const loadImages = async (setLoadingType: any, numTries?: number) => {
    const fetchImages = async () => {
      const res = await Storage.list(path);
      let targetImages = res;
      if (!!size) {
        targetImages = res.filter((r) => r.key?.includes(`/${size}_`));
      }
      return targetImages;
    };
    setLoadingType(true);
    let targetImages = await fetchImages();
    setImages(targetImages as S3Image[]);
    setLoadingType(false);
    if (numTries !== undefined) {
      if (numTries === 0) return;
      numTries--;
    }
    if (
      expectedNumImgs !== undefined &&
      targetImages.length !== expectedNumImgs
    ) {
      loadImages(setUploading, numTries);
    }
  };

  const saveImages = async (files: File[] | FileList) => {
    if (!files) return;
    setUploading(true);
    const promises = Object.values(files).map((file) =>
      Storage.put(`${path}/${file.name}`, file)
    );
    let newFiles = (await Promise.all(promises)) as S3Image[];
    setImages([...images, ...newFiles]);
    setUploading(false);
    if (updateCallback) updateCallback([...images, ...newFiles]);
  };

  const showImage = (idx: number) => {
    setCurrentIndex(idx);
    setShowPreview(true);
  };

  const hideImage = () => {
    setShowPreview(false);
  };

  const downloadImages = async (imgKeys: string[]) => {
    if (imgKeys.length === 1) {
      const file = (await Storage.get(
        getImageKeyBySize(imgKeys[0], previewSize),
        {
          download: true,
        }
      )) as any;
      await downloadFile(getImageNameFromKey(imgKeys[0]) as string, file.Body);
    }
  };

  const handleDeleteImages = (imgKeys: string[]) => {
    const newImages = images.filter(
      (f: { key: string }) => !imgKeys.includes(f.key)
    );
    console.log({ newImages });
    setImages(newImages);
    deleteImages(imgKeys);
    if (updateCallback) updateCallback(newImages);
  };

  return (
    <ImagesContext.Provider
      value={{
        images,
        loading,
        uploading,
        fileType,
        getImageName,
        showImage,
        label,
        setOpenCamera,
        currentIndex,
        setCurrentIndex,
        saveImages,
        deleteImages: handleDeleteImages,
        downloadImages,
        previewSize,
      }}
    >
      <Preview
        open={showPreview}
        hideImage={hideImage}
        currentImage={images[currentIndex]}
      />
      <Camera open={openCamera} setOpen={setOpenCamera} />
      {children}
    </ImagesContext.Provider>
  );
};

export const useImages = () => {
  const imagesContext = useContext(ImagesContext);

  if (imagesContext === undefined) {
    throw new Error("useImages must be within AuthProvider");
  }

  return imagesContext;
};
