import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { useImages } from "contexts/images";
import { useSelectedImages } from "contexts/selectedImages";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CameraIcon from "@mui/icons-material/CameraAlt";
import { S3Image } from "utils/image";
import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => (
  <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1">
    {children}
  </div>
);

const SelectButton = ({ img }: { img: S3Image }) => {
  const { isSelected } = useSelectedImages();
  return (
    <div className="absolute flex items-center justify-center top-2 left-2 w-5 h-5 sm:w-8 sm:h-8 md:w-6 md:h-6">
      {isSelected(img) && (
        <CheckCircleIcon
          sx={{ margin: 0 }}
          color="primary"
          className="bg-white rounded-full"
        />
      )}
    </div>
  );
};

const TakePhotoBlock = () => {
  const { uploading, label, setOpenCamera } = useImages();
  return (
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
  );
};

export function Images() {
  const { loading, images, showImage, getImageName, previewSize } = useImages();
  const { bind, mode, selectedImages, setSelectedImages, isSelected } =
    useSelectedImages();

  if (loading)
    return (
      <div className="w-full h-24 flex justify-center items-center">
        <CircularProgress size={50} />
      </div>
    );

  const handleImgClick = (img: S3Image, idx: number) => {
    if (mode === "gallery") {
      showImage(idx);
      setSelectedImages([{ key: img.key, downloadSize: previewSize }]);
    }
    if (!isSelected(img))
      return setSelectedImages([
        ...selectedImages,
        { key: img.key, downloadSize: previewSize },
      ]);
    setSelectedImages(selectedImages.filter((i) => i.key !== img.key));
  };

  return (
    <Container>
      {images.map((img, idx: number) => (
        <div
          key={img.key}
          className={`${
            isSelected(img) ? "p-3 bg-slate-400" : "p-0 bg-black"
          } relative w-full aspect-square flex justify-center items-center`}
        >
          <div
            onClick={() => handleImgClick(img, idx)}
            {...bind({ imgKey: img.key })}
            className="absolute inset-0 bg-transparent"
          />
          <SelectButton img={img} />
          <div
            style={{ width: "100%", aspectRatio: "1/1" }}
            className={`w-full aspect-square overflow-hidden object-center flex justify-center items-center ${
              isSelected(img) ? "rounded-xl" : ""
            }`}
          >
            <AmplifyS3Image
              style={{ width: "100%", aspectRatio: "1/1" }}
              imgKey={img.key}
              alt={getImageName(img) || "img"}
            />
          </div>
        </div>
      ))}
      {mode === "gallery" && <TakePhotoBlock />}
    </Container>
  );
}
export default Images;
