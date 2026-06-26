import { nowIso, query } from "./db";
import { createId } from "./ids";

export async function writeAuditLog(input: {
  actorEmail?: string | null;
  action: string;
  entityType: string;
  entityId?: string | null;
  detail?: string | null;
}) {
  await query(
    `
      INSERT INTO audit_logs (id, actor_email, action, entity_type, entity_id, detail, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
    [
      createId(),
      input.actorEmail ?? null,
      input.action,
      input.entityType,
      input.entityId ?? null,
      input.detail ?? null,
      nowIso(),
    ],
  );
}
