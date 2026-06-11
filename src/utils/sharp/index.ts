import sharp from "sharp";

export async function Imagecustomizer(
  image: File, // Accept the dynamic file from your form
  resize: number, // Target width (e.g., 1920)
  quality: number, // Compression quality (e.g., 80)
): Promise<Buffer> {
  // Returns a Node Buffer ready for Cloudflare R2

  // 1. Convert the browser File object into a server-readable Node Buffer
  const arrayBuffer = await image.arrayBuffer();
  const inputBuffer = Buffer.from(arrayBuffer);

  // 2. Process the image buffer in memory using sharp
  const optimizedBuffer = await sharp(inputBuffer)
    .resize({
      width: resize,
      fit: "inside",
      withoutEnlargement: true, // Prevents upscaling tiny images
    })
    .webp({ quality: quality }) // Converts to ultra-lean WebP format
    .toBuffer(); // Keeps the file in memory instead of saving to disk

  return optimizedBuffer;
}
