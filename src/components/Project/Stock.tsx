import { useProject } from "contexts/project";
import Gallery from "components/Gallery";

export default function Stock() {
  const { project } = useProject();

  if (!project) return null;

  return (
    <div className="block h-full">
      <Gallery
        label="入荷写真"
        path={`${project?.id}/stocking`}
        fileType="image/*"
      />
      <Gallery
        label="ケースマーク"
        path={`${project?.id}/casemarks`}
        fileType="*"
      />
    </div>
  );
}
