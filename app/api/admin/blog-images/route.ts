import fs from "node:fs/promises";
import path from "node:path";
import { NextRequest } from "next/server";
import { requireAdminOrResponse, requireCsrfOrResponse } from "@/lib/admin";
import { fail, ok } from "@/lib/http";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

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

  const bytes = Buffer.from(await file.arrayBuffer());
  const year = String(new Date().getFullYear());
  const ext = file.name.includes(".") ? file.name.split(".").pop() : "bin";
  const filename = `${Date.now()}-${file.name.toLowerCase().replace(/[^a-z0-9.-]+/g, "-")}`;
  const relativeDir = path.join("uploads", year);
  const absoluteDir = path.join(process.cwd(), "public", relativeDir);
  await fs.mkdir(absoluteDir, { recursive: true });
  await fs.writeFile(path.join(absoluteDir, `${filename}.${ext}`), bytes);

  return ok({ url: `/${relativeDir}/${filename}.${ext}` }, { status: 201 });
}

