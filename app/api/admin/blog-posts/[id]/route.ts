import { NextRequest } from "next/server";
import { requireAdminOrResponse, requireCsrfOrResponse } from "@/lib/admin";
import { writeAuditLog } from "@/lib/audit";
import { fail, ok } from "@/lib/http";
import { getPostById, getPostBySlug, softDeletePost, updatePost } from "@/lib/repo";
import { normalizeBlogPayload } from "@/lib/validation";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_: NextRequest, context: Context) {
  const auth = await requireAdminOrResponse();
  if (auth.response) return auth.response;
  const { id } = await context.params;
  const post = await getPostById(id);
  if (!post) return fail("Not found", { status: 404 });
  return ok(post);
}

export async function PATCH(request: NextRequest, context: Context) {
  const auth = await requireAdminOrResponse();
  if (auth.response) return auth.response;
  const csrf = await requireCsrfOrResponse();
  if (csrf) return csrf;
  const { id } = await context.params;
  const current = await getPostById(id);
  if (!current) return fail("Not found", { status: 404 });
  const body = await request.json().catch(() => null);
  if (!body) return fail("Invalid JSON payload.", { status: 400 });

  try {
    const payload = normalizeBlogPayload(body);
    const existing = await getPostBySlug(payload.slug);
    if (existing && String(existing.id) !== id) {
      return fail(`Slug "${payload.slug}" is already used by "${existing.title}". Choose another slug.`, {
        status: 409,
        field_errors: { slug: "Duplicate slug." },
      });
    }
    const updated = await updatePost(id, {
      ...payload,
      published_at: payload.is_published ? payload.published_at || current.published_at || new Date().toISOString() : null,
    });
    await writeAuditLog({
      actorEmail: auth.user?.email,
      action: "blog_post.update",
      entityType: "blog_post",
      entityId: id,
      detail: payload.title,
    });
    return ok(updated, { message: "Blog post saved successfully." });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Could not save blog post.", { status: 400 });
  }
}

export async function DELETE(_: NextRequest, context: Context) {
  const auth = await requireAdminOrResponse();
  if (auth.response) return auth.response;
  const csrf = await requireCsrfOrResponse();
  if (csrf) return csrf;
  const { id } = await context.params;
  const existing = await getPostById(id);
  if (!existing) return fail("Not found", { status: 404 });
  await softDeletePost(id);
  await writeAuditLog({
    actorEmail: auth.user?.email,
    action: "blog_post.delete",
    entityType: "blog_post",
    entityId: id,
    detail: String(existing.title),
  });
  return ok({ id }, { message: "Post deleted" });
}
