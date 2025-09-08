export function getSlug(path: string): string {
  const filename = path.substring(path.lastIndexOf("/") + 1);
  const lastDotIndex = filename.lastIndexOf(".");
  return lastDotIndex === -1 ? filename : filename.substring(0, lastDotIndex);
}
