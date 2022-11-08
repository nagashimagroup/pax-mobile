import { useProject } from "contexts/project";
import { ImagesProvider } from "contexts/images";
import { SelectedImagesProvider } from "contexts/selectedImages";
import { Images, GalleryHeader, SelectFooter } from "components/Gallery";
import Accordion from "components/Accordion";
import { Project } from "API";

const galleries = (project: Project, update: any) => [
  {
    key: `${project?.id}_stocking`,
    title: `入荷写真${project.stockNumImgs ? ` x${project.stockNumImgs}` : ""}`,
    open: true,
    content: (
      <ImagesProvider
        label="入荷写真"
        path={`${project?.id}/photo/stocking`}
        fileType="image/*"
        size="sm"
        previewSize="lg"
        updateCallback={(images) => {
          update({
            id: project.id,
            stockNumImgs: images.length,
          });
        }}
        expectedNumImgs={project.stockNumImgs || undefined}
      >
        <GalleryHeader
          showTitle={false}
          showHeaderButton
          showFileUploadButton
        />
        <Images />
      </ImagesProvider>
    ),
  },
  {
    key: `${project?.id}_casemark`,
    title: `ケースマーク${
      project.caseMarkNumImgs ? ` x${project.caseMarkNumImgs}` : ""
    }`,
    content: (
      <ImagesProvider
        label="ケースマーク"
        path={`${project?.id}/files/casemarks`}
        fileType="*"
        updateCallback={(images) => {
          update({
            id: project.id,
            caseMarkNumImgs: images.length,
          });
        }}
        expectedNumImgs={project.caseMarkNumImgs || undefined}
      >
        <GalleryHeader
          showTitle={false}
          showHeaderButton
          showFileUploadButton
        />
        <Images />
      </ImagesProvider>
    ),
  },
];

export default function Stock() {
  const { project, update } = useProject();

  if (!project) return null;
  return (
    <div className="m-2">
      <SelectedImagesProvider>
        <Accordion items={galleries(project, update)} />
        <SelectFooter />
      </SelectedImagesProvider>
    </div>
  );
}
