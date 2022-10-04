import { Storage } from "aws-amplify";

export interface S3Image {
  key: string;
  lastModified: Date;
}

export type ImageSize = "xs" | "sm" | "md" | "lg";

export const isImage = (file: S3Image) => {
  if (!file) return false;
  const ext = file.key.split(".")[1];
  if (!ext) return false;
  if (
    [
      "jpeg",
      "jpg",
      "png",
      "jpe",
      "jif",
      "gif",
      "webp",
      "tiff",
      "tif",
      "bmp",
      "svg",
      "ai",
    ].includes(ext.toLowerCase())
  ) {
    return true;
  }
  return false;
};

export const getLgImageKey = (key: string) => {
  let newKey = key
    .replace("/xs_", "/lg_")
    .replace("/sm_", "/lg_")
    .replace("/md_", "/lg_");
  if (!newKey.includes("/lg_")) {
    const imgName = newKey.split("/").at(-1);
    if (!imgName) return newKey;
    newKey = newKey.replace(imgName, `lg_${imgName}`);
  }
  return newKey;
};

export const deleteImages = async (imageKeys: string[]) => {
  let delProm: Promise<any>[] = [];
  imageKeys.forEach((k: string) => {
    const lgFileKey = getLgImageKey(k);
    delProm = delProm.concat([
      Storage.remove(lgFileKey),
      Storage.remove(lgFileKey.replace("/lg_", "/xs_")),
      Storage.remove(lgFileKey.replace("/lg_", "/sm_")),
      Storage.remove(lgFileKey.replace("/lg_", "/md_")),
    ]);
  });
  await Promise.all(delProm);
};
