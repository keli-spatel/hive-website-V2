import { NextRequest } from "next/server";
import { requireAdminOrResponse, requireCsrfOrResponse } from "@/lib/admin";
import { writeAuditLog } from "@/lib/audit";
import { fail, ok } from "@/lib/http";
import { createPost, getPostBySlug, listAdminPosts } from "@/lib/repo";
import { normalizeBlogPayload } from "@/lib/validation";

export async function GET() {
  const auth = await requireAdminOrResponse();
  if (auth.response) return auth.response;
  return ok(await listAdminPosts());
}

export async function POST(request: NextRequest) {
  const auth = await requireAdminOrResponse();
  if (auth.response) return auth.response;
  const csrf = await requireCsrfOrResponse();
  if (csrf) return csrf;

  const body = await request.json().catch(() => null);
  if (!body) return fail("Invalid JSON payload.", { status: 400 });

  try {
    const payload = normalizeBlogPayload(body);
    const existing = await getPostBySlug(payload.slug);
    if (existing) {
      return fail(`Slug "${payload.slug}" is already used by "${existing.title}". Choose another slug.`, {
        status: 409,
        field_errors: { slug: "Duplicate slug." },
      });
    }

    const created = await createPost({
      ...payload,
      published_at: payload.is_published ? payload.published_at || new Date().toISOString() : null,
    });

    await writeAuditLog({
      actorEmail: auth.user?.email,
      action: "blog_post.create",
      entityType: "blog_post",
      entityId: String(created?.id ?? ""),
      detail: payload.title,
    });

    return ok(created, { status: 201, message: "Blog post created successfully." });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Could not create blog post.", { status: 400 });
  }
}
