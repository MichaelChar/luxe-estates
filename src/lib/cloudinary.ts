// Cloudinary scaffold — not required for local development.
// To enable: set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local
// Images will use Unsplash URLs by default when Cloudinary is not configured.

export function getCloudinaryUrl(
  publicId: string,
  options: { width?: number; height?: number; quality?: number } = {}
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    // Return the publicId as-is (assumed to be a full URL)
    return publicId;
  }

  const { width = 800, height, quality = 80 } = options;
  const transforms = [`w_${width}`, `q_${quality}`, "f_auto", "c_fill"];
  if (height) transforms.push(`h_${height}`);

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms.join(",")}/${publicId}`;
}
