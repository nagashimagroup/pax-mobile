import Images from "./Images";
import { SelectFooter, GalleryHeader } from "./Headers";
import { ImagesProvider } from "contexts/images";
import { S3Image, ImageSize } from "utils/image";

interface GalleryProps {
  label?: string;
  path: string;
  fileType: string;
  showTitle?: boolean;
  showHeaderButton?: boolean;
  showFileUploadButton?: boolean;
  size?: ImageSize;
  updateCallback?: (fileList: S3Image[]) => void;
  startCamera?: boolean;
  expectedNumImgs?: number;
}

export default function Gallery({
  label,
  path,
  fileType,
  showTitle,
  showHeaderButton,
  showFileUploadButton,
  size,
  updateCallback,
  startCamera,
  expectedNumImgs,
}: GalleryProps) {
  return (
    <div className="w-full overflow-y-scroll">
      <ImagesProvider
        path={path}
        fileType={fileType}
        size={size || "sm"}
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
        <SelectFooter />
      </ImagesProvider>
    </div>
  );
}
