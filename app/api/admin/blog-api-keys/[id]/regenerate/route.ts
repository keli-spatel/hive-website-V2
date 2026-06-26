import { NextRequest } from "next/server";
import { requireAdminOrResponse, requireCsrfOrResponse } from "@/lib/admin";
import { writeAuditLog } from "@/lib/audit";
import { ok } from "@/lib/http";
import { regenerateApiKey } from "@/lib/repo";

type Context = { params: Promise<{ id: string }> };

export async function POST(_: NextRequest, context: Context) {
  const auth = await requireAdminOrResponse();
  if (auth.response) return auth.response;
  const csrf = await requireCsrfOrResponse();
  if (csrf) return csrf;
  const { id } = await context.params;
  const secret = await regenerateApiKey(id);
  await writeAuditLog({
    actorEmail: auth.user?.email,
    action: "api_key.regenerate",
    entityType: "api_key",
    entityId: id,
  });
  return ok({ id, secret }, { message: "API key regenerated." });
}
