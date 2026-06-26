import { NextRequest } from "next/server";
import { fail, ok } from "@/lib/http";
import { getApiKeyBySecret, getPostById, softDeletePost, touchApiKeyLastUsed, updatePost } from "@/lib/repo";
import { normalizeBlogPayload } from "@/lib/validation";

async function authorize(request: NextRequest) {
  const key = request.headers.get("x-api-key");
  if (!key) return null;
  const record = await getApiKeyBySecret(key);
  if (!record || record.revoked_at) return null;
  if (record.expires_at && new Date(String(record.expires_at)).getTime() <= Date.now()) return null;
  await touchApiKeyLastUsed(String(record.id));
  return record;
}

type Context = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, context: Context) {
  const auth = await authorize(request);
  if (!auth) return fail("Unauthorized", { status: 401 });
  const { id } = await context.params;
  const post = await getPostById(id);
  if (!post) return fail("Not found", { status: 404 });
  return ok(post);
}

export async function PATCH(request: NextRequest, context: Context) {
  const auth = await authorize(request);
  if (!auth) return fail("Unauthorized", { status: 401 });
  const { id } = await context.params;
  const existing = await getPostById(id);
  if (!existing) return fail("Not found", { status: 404 });
  const body = await request.json().catch(() => null);
  if (!body) return fail("Invalid JSON payload.", { status: 400 });
  try {
    const payload = normalizeBlogPayload({
      ...existing,
      ...body,
      is_published: existing.is_published,
      published_at: existing.published_at,
    });
    const updated = await updatePost(id, { ...payload, is_published: existing.is_published, published_at: existing.published_at });
    return ok(updated);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Could not update post.", { status: 400 });
  }
}

export async function DELETE(request: NextRequest, context: Context) {
  const auth = await authorize(request);
  if (!auth) return fail("Unauthorized", { status: 401 });
  const { id } = await context.params;
  if (!await getPostById(id)) return fail("Not found", { status: 404 });
  await softDeletePost(id);
  return ok({ id });
}
