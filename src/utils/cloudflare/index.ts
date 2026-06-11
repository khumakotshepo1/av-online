import { S3Client } from "@aws-sdk/client-s3";

// 1. Safely pull environmental credentials into variables
const endpoint = process.env.R2_ENDPOINT;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

// 2. Validate availability instantly to keep TypeScript/ESLint happy
if (!endpoint || !accessKeyId || !secretAccessKey) {
  throw new Error(
    "Missing required Cloudflare R2 environment variables in .env configuration.",
  );
}

// 3. Export your clean, safely checked client instance variable
export const r2Client = new S3Client({
  region: "auto",
  endpoint: endpoint,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});
