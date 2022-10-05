// base64 decode
export function decodeBase64(fileSrc: string) {
  const blob = atob(fileSrc.replace(/^.*,/, ""));
  let buffer = new Uint8Array(blob.length);
  for (let i = 0; i < blob.length; i++) {
    buffer[i] = blob.charCodeAt(i);
  }
  return buffer;
}

export const downloadFile = async (
  fileName: string,
  blob: Blob | MediaSource
) => {
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
};
