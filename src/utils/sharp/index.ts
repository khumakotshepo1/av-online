import sharp from "sharp";

export async function imageCustomizer(
  image: File,
  resize: number,
  quality: number,
): Promise<Buffer> {
  try {
    const arrayBuffer = await image.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuffer);

    const optimizedBuffer = await sharp(inputBuffer)
      .rotate()
      .resize({
        width: resize,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: quality })
      .toBuffer();

    return optimizedBuffer;
  } catch (error) {
    throw new Error(`Image optimization failed: ${(error as Error).message}`);
  }
}
