import { NextRequest } from "next/server";
import { fail, ok } from "@/lib/http";
import { createPost, getApiKeyBySecret, listAdminPosts, touchApiKeyLastUsed } from "@/lib/repo";
import { normalizeBlogPayload } from "@/lib/validation";

async function authorize(request: NextRequest) {
  const key = request.headers.get("x-api-key");
  if (!key) return null;
  const record = await getApiKeyBySecret(key);
  if (!record) return null;
  if (record.revoked_at) return null;
  if (record.expires_at && new Date(String(record.expires_at)).getTime() <= Date.now()) return null;
  await touchApiKeyLastUsed(String(record.id));
  return record;
}

export async function GET(request: NextRequest) {
  const auth = await authorize(request);
  if (!auth) return fail("Unauthorized", { status: 401 });
  const status = request.nextUrl.searchParams.get("status") ?? "all";
  if (!["all", "draft", "published"].includes(status)) {
    return fail("Invalid status.", { status: 400 });
  }
  let posts = await listAdminPosts();
  if (status === "draft") posts = posts.filter((post) => !post.is_published);
  if (status === "published") posts = posts.filter((post) => post.is_published);
  return ok(
    posts.map((post) => ({
      id: post.id,
      title: post.title,
      description: post.description,
      created_at: post.created_at,
      is_published: post.is_published,
      status: post.deleted_at ? "deleted" : post.is_published ? "published" : "draft",
    })),
  );
}

export async function POST(request: NextRequest) {
  const auth = await authorize(request);
  if (!auth) return fail("Unauthorized", { status: 401 });
  const body = await request.json().catch(() => null);
  if (!body) return fail("Invalid JSON payload.", { status: 400 });
  try {
    const payload = normalizeBlogPayload({ ...body, is_published: false, published_at: null });
    const created = await createPost({ ...payload, is_published: false, published_at: null });
    return ok(created, { status: 201 });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Could not create post.", { status: 400 });
  }
}
