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

export const getImageName = (img: S3Image) => {
  return getImageNameFromKey(img.key);
};

export const getImageNameFromKey = (key: string | null) => {
  if (!key) return null;
  const fileName = key.split("/").at(-1);
  if (!fileName) return key;
  return fileName
    .replace("lg_", "")
    .replace("md_", "")
    .replace("sm_", "")
    .replace("xs_", "");
};

export const getImageKeyBySize = (key: string, size?: ImageSize) => {
  if (!size) return key;
  let newKey = key
    .replace("/xs_", `/${size}_`)
    .replace("/sm_", `/${size}_`)
    .replace("/md_", `/${size}_`);
  if (!newKey.includes(`/${size}_`)) {
    const imgName = newKey.split("/").at(-1);
    if (!imgName) return newKey;
    newKey = newKey.replace(imgName, `${size}_${imgName}`);
  }
  return newKey;
};

export const deleteImages = async (imageKeys: string[]) => {
  let delProm: Promise<any>[] = [];
  imageKeys.forEach((k: string) => {
    const lgFileKey = getImageKeyBySize(k, "lg");
    delProm = delProm.concat([
      Storage.remove(k),
      Storage.remove(lgFileKey),
      Storage.remove(lgFileKey.replace("/lg_", "/xs_")),
      Storage.remove(lgFileKey.replace("/lg_", "/sm_")),
      Storage.remove(lgFileKey.replace("/lg_", "/md_")),
    ]);
  });
  await Promise.all(delProm);
};
