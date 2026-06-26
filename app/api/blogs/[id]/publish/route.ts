import { NextRequest } from "next/server";
import { fail, ok } from "@/lib/http";
import { getApiKeyBySecret, getPostById, touchApiKeyLastUsed, updatePost } from "@/lib/repo";

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

export async function POST(request: NextRequest, context: Context) {
  const auth = await authorize(request);
  if (!auth) return fail("Unauthorized", { status: 401 });
  const { id } = await context.params;
  const existing = await getPostById(id);
  if (!existing) return fail("Not found", { status: 404 });
  const updated = await updatePost(id, {
    ...existing,
    is_published: true,
    published_at: existing.published_at || new Date().toISOString(),
  });
  return ok(updated);
}
