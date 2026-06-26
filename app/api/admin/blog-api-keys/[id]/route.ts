import { NextRequest } from "next/server";
import { requireAdminOrResponse, requireCsrfOrResponse } from "@/lib/admin";
import { writeAuditLog } from "@/lib/audit";
import { deleteApiKey } from "@/lib/repo";
import { ok } from "@/lib/http";

type Context = { params: Promise<{ id: string }> };

export async function DELETE(_: NextRequest, context: Context) {
  const auth = await requireAdminOrResponse();
  if (auth.response) return auth.response;
  const csrf = await requireCsrfOrResponse();
  if (csrf) return csrf;
  const { id } = await context.params;
  await deleteApiKey(id);
  await writeAuditLog({
    actorEmail: auth.user?.email,
    action: "api_key.delete",
    entityType: "api_key",
    entityId: id,
  });
  return ok({ id }, { message: "API key deleted." });
}
