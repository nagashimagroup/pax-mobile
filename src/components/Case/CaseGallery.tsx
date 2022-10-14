/* eslint-disable react-hooks/exhaustive-deps */
import { useProduct } from "contexts/product";
import { ImagesProvider } from "contexts/images";
import { SelectedImagesProvider } from "contexts/selectedImages";
import { Images, GalleryHeader, SelectFooter } from "components/Gallery";
import Accordion from "components/Accordion";
import { Case, PackPhase, Product } from "API";

const galleries = (currentCase: Case, product: Product, update: any) =>
  currentCase?.packPhases &&
  currentCase?.packPhases.map((phase: PackPhase | null) => ({
    key: `${phase?.id}_gallery`,
    title: phase?.name || "?",
    subtitle: phase?.numImgs ? ` x${phase.numImgs}` : "",
    open: true,
    content: (
      <ImagesProvider
        label={phase?.name || "?"}
        path={`${product.projectId}/${product.id}/${currentCase.order}/${phase?.id}`}
        fileType="image/*"
        size="sm"
        previewSize="lg"
        updateCallback={(fileList) => {
          update(currentCase.order as number, phase?.id as string, {
            numImgs: fileList.length,
          });
        }}
        expectedNumImgs={phase?.numImgs || undefined}
      >
        <GalleryHeader
          showTitle={false}
          showHeaderButton
          showFileUploadButton
        />
        <Images />
      </ImagesProvider>
    ),
  }));

export default function CaseGallery() {
  const { currentCase, updatePhase, product } = useProduct();

  if (!currentCase || !currentCase?.packPhases) return null;

  return (
    <div className="m-2">
      <SelectedImagesProvider>
        <Accordion
          items={galleries(
            currentCase as Case,
            product as Product,
            updatePhase
          )}
        />
        <SelectFooter />
      </SelectedImagesProvider>
    </div>
  );
}
