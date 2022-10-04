import { useProject } from "contexts/project";
import Gallery from "components/Gallery";

export default function Stock() {
  const { project } = useProject();

  if (!project) return null;

  return (
    <div className="w-screen h-full px-1">
      <Gallery
        label="入荷写真"
        path={`${project?.id}/stocking`}
        fileType="image/*"
        size="sm"
        showTitle
        showHeaderButton
        showFileUploadButton
      />
      <Gallery
        label="ケースマーク"
        path={`${project?.id}/casemarks`}
        fileType="*"
        showTitle
        showHeaderButton
        showFileUploadButton
      />
    </div>
  );
}
