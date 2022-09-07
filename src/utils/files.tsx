// base64 decode
export function decodeBase64(fileSrc: string) {
  const blob = atob(fileSrc.replace(/^.*,/, ""));
  let buffer = new Uint8Array(blob.length);
  for (let i = 0; i < blob.length; i++) {
    buffer[i] = blob.charCodeAt(i);
  }
  return buffer;
}
