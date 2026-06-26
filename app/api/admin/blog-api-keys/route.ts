import { NextRequest } from "next/server";
import { requireAdminOrResponse, requireCsrfOrResponse } from "@/lib/admin";
import { writeAuditLog } from "@/lib/audit";
import { fail, ok } from "@/lib/http";
import { createApiKey, listApiKeys } from "@/lib/repo";
import { apiKeyCreateSchema } from "@/lib/validation";

export async function GET() {
  const auth = await requireAdminOrResponse();
  if (auth.response) return auth.response;
  return ok(await listApiKeys());
}

export async function POST(request: NextRequest) {
  const auth = await requireAdminOrResponse();
  if (auth.response) return auth.response;
  const csrf = await requireCsrfOrResponse();
  if (csrf) return csrf;

  const body = await request.json().catch(() => null);
  if (!body) return fail("Invalid JSON payload.", { status: 400 });
  const parsed = apiKeyCreateSchema.safeParse(body);
  if (!parsed.success) return fail("Key name is required.", { status: 400 });

  const created = await createApiKey({
    name: parsed.data.name,
    expires_at: parsed.data.expires_at || null,
    created_by_email: auth.user?.email,
  });
  await writeAuditLog({
    actorEmail: auth.user?.email,
    action: "api_key.create",
    entityType: "api_key",
    entityId: created.id,
    detail: parsed.data.name,
  });
  return ok(created, { status: 201, message: "API key created." });
}
