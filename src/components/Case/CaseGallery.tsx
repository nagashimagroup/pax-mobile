/* eslint-disable react-hooks/exhaustive-deps */
import { useProduct } from "contexts/product";
import { ImagesProvider } from "contexts/images";
import { SelectedImagesProvider } from "contexts/selectedImages";
import { Images, GalleryHeader, SelectFooter } from "components/Gallery";
import Accordion from "components/Accordion";
import { Case, PackPhase, Product } from "API";
import { getImageKeyBySize } from "utils/image";

const galleries = (
  currentCase: Case,
  product: Product,
  updateCase: any,
  updatePhase: any
) =>
  currentCase?.packPhases &&
  currentCase?.packPhases.map((phase: PackPhase | null) => ({
    key: `${phase?.id}_gallery`,
    title: phase?.name || "?",
    subtitle: phase?.numImgs ? ` x${phase.numImgs}` : "",
    open: true,
    content: (
      <ImagesProvider
        label={phase?.name || "?"}
        path={`${product.projectId}/photo/products/${product.id}/${currentCase.order}/${phase?.id}`}
        fileType="image/*"
        size="sm"
        previewSize="lg"
        updateCallback={(fileList) => {
          if (fileList.length > 0) {
            updateCase({
              order: currentCase.order as number,
              thumbnail: getImageKeyBySize(
                fileList.at(-1)?.key as string,
                "sm"
              ),
            });
          } else {
            updateCase({
              order: currentCase.order as number,
              thumbnail: null,
            });
          }
          updatePhase(currentCase.order as number, phase?.id as string, {
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
  const { currentCase, updatePhase, updateCase, product } = useProduct();

  if (!currentCase || !currentCase?.packPhases) return null;

  return (
    <div className="m-2">
      <SelectedImagesProvider>
        <Accordion
          items={galleries(
            currentCase as Case,
            product as Product,
            updateCase,
            updatePhase
          )}
        />
        <SelectFooter />
      </SelectedImagesProvider>
    </div>
  );
}
