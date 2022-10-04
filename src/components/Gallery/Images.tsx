import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { useImages } from "contexts/images";
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
  const { isSelected } = useImages();
  return (
    <div className="absolute flex items-center justify-center top-0 left-0 w-5 h-5 sm:w-8 sm:h-8 md:w-6 md:h-6">
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

export default function Image() {
  const {
    loading,
    images,
    bind,
    mode,
    selectedImages,
    setSelectedImages,
    showImage,
    isSelected,
    getImageName,
  } = useImages();

  if (loading)
    return (
      <div className="w-full h-24 flex justify-center items-center">
        <CircularProgress size={50} />
      </div>
    );

  const handleImgClick = (img: S3Image, idx: number) => {
    if (mode === "gallery") return showImage(idx);
    if (!isSelected(img))
      return setSelectedImages([...selectedImages, img.key]);
    setSelectedImages(selectedImages.filter((k) => k !== img.key));
  };

  return (
    <Container>
      {images.map((img, idx: number) => (
        <div
          key={img.key}
          className={`${
            isSelected(img) ? "p-3 bg-slate-400" : "p-0"
          } relative w-full aspect-square flex justify-center items-center`}
        >
          <SelectButton img={img} />
          <div
            onClick={() => handleImgClick(img, idx)}
            className={`w-full aspect-square overflow-hidden object-cover ${
              isSelected(img) ? "rounded-xl" : ""
            }`}
            {...bind({ imgKey: img.key })}
          >
            <AmplifyS3Image
              style={{ width: "100%" }}
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
