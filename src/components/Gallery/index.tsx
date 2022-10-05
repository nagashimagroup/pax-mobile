import Images from "./Images";
import { SelectFooter, GalleryHeader } from "./Headers";
import { ImagesProvider } from "contexts/images";
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

// make image context support multiple paths
// 2 separate contexts
// use mode, select, delete, download in image-select context
// use label, path, fileType, size, previewSize, updateCallback, etc for image context
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
        <Images path={path} size={size} />
        <SelectFooter />
      </ImagesProvider>
    </div>
  );
}
