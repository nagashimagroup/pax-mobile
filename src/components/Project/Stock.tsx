import { useProject } from "contexts/project";
import Gallery from "components/Gallery";
import Accordion from "components/Accordion";
import { Project } from "API";

const galleries = (project: Project) => [
  {
    key: `${project?.id}_stocking`,
    title: "入荷写真",
    content: (
      <Gallery
        label="入荷写真"
        path={`${project?.id}/stocking`}
        fileType="image/*"
        size="sm"
        previewSize="lg"
        showTitle={false}
        showHeaderButton
        showFileUploadButton
      />
    ),
  },
  {
    key: `${project?.id}_stocking`,
    title: "ケースマーク",
    content: (
      <Gallery
        label="ケースマーク"
        path={`${project?.id}/casemarks`}
        fileType="*"
        showTitle={false}
        showHeaderButton
        showFileUploadButton
      />
    ),
  },
];

export default function Stock() {
  const { project } = useProject();

  if (!project) return null;

  return <Accordion items={galleries(project)} />;
}
