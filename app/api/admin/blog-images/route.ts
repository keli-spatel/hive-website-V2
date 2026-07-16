import { createHash } from "node:crypto";
import { NextRequest } from "next/server";
import { requireAdminOrResponse, requireCsrfOrResponse } from "@/lib/admin";
import { fail, ok } from "@/lib/http";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

export const runtime = "nodejs";

function getCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return null;
  }

  return { cloudName, apiKey, apiSecret };
}

function signUpload(params: Record<string, string>, apiSecret: string) {
  const payload = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  return createHash("sha1").update(`${payload}${apiSecret}`).digest("hex");
}

export async function POST(request: NextRequest) {
  const auth = await requireAdminOrResponse();
  if (auth.response) return auth.response;
  const csrf = await requireCsrfOrResponse();
  if (csrf) return csrf;

  const formData = await request.formData();
  const file = formData.get("file");
  if (!(file instanceof File)) return fail("No image uploaded.", { status: 400 });
  if (!allowedTypes.has(file.type)) return fail("Unsupported image type.", { status: 415 });
  if (file.size > 10 * 1024 * 1024) return fail("Image exceeds 10 MB.", { status: 413 });

  const config = getCloudinaryConfig();
  if (!config) {
    return fail("Cloudinary is not configured. Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.", {
      status: 500,
    });
  }

  const timestamp = String(Math.floor(Date.now() / 1000));
  const uploadParams = {
    folder: process.env.CLOUDINARY_BLOG_FOLDER || "hive-automation/blog",
    timestamp,
  };
  const signature = signUpload(uploadParams, config.apiSecret);
  const cloudinaryForm = new FormData();
  cloudinaryForm.append("file", file);
  cloudinaryForm.append("api_key", config.apiKey);
  cloudinaryForm.append("folder", uploadParams.folder);
  cloudinaryForm.append("timestamp", timestamp);
  cloudinaryForm.append("signature", signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`, {
    method: "POST",
    body: cloudinaryForm,
  });
  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.secure_url) {
    return fail(data?.error?.message || "Cloudinary could not store the image.", { status: 502 });
  }

  return ok(
    {
      url: data.secure_url as string,
      public_id: data.public_id as string,
      width: data.width as number | undefined,
      height: data.height as number | undefined,
    },
    { status: 201 },
  );
}
