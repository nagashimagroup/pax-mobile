import Images from "components/Gallery/Images";
import { SelectFooter, GalleryHeader } from "components/Gallery/Headers";
import { ImagesProvider } from "contexts/images";
import { SelectedImagesProvider } from "contexts/selectedImages";
import { S3Image, ImageSize } from "utils/image";

export * from "./Headers";
export * from "./Images";

interface GalleryProps {
  label?: string;
  path: string;
  fileType: string;
  showTitle?: boolean;
  showHeaderButton?: boolean;
  showFileUploadButton?: boolean;
  size?: ImageSize;
  previewSize?: ImageSize;
  updateCallback?: (fileList: S3Image[]) => void;
  startCamera?: boolean;
  expectedNumImgs?: number;
}

// bugs when deletes last photo
// QR code scan not leading to correct page
// iPhone
export default function Gallery({
  label,
  path,
  fileType,
  showTitle,
  showHeaderButton,
  showFileUploadButton,
  size,
  previewSize,
  updateCallback,
  startCamera,
  expectedNumImgs,
}: GalleryProps) {
  return (
    <div className="w-full">
      <SelectedImagesProvider>
        <ImagesProvider
          path={path}
          fileType={fileType}
          size={size}
          previewSize={previewSize}
          label={label}
          startCamera={startCamera}
          updateCallback={updateCallback}
          expectedNumImgs={expectedNumImgs}
        >
          <GalleryHeader
            showHeaderButton={showHeaderButton}
            showFileUploadButton={showFileUploadButton}
            showTitle={showTitle}
          />
          <Images />
        </ImagesProvider>
        <SelectFooter />
      </SelectedImagesProvider>
    </div>
  );
}
