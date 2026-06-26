import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { nowIso, query } from "./db";
import { createId, createOpaqueToken, sha256 } from "./ids";

const SESSION_COOKIE = "hive_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 14;

export type AdminUser = {
  id: string;
  email: string;
  is_admin: boolean;
};

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function getSessionCookieName() {
  return SESSION_COOKIE;
}

export async function createAdminSession(userId: string) {
  const token = createOpaqueToken();
  const tokenHash = sha256(token);
  const now = nowIso();
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();

  await query("DELETE FROM admin_sessions WHERE user_id = $1", [userId]);
  await query(
    `
      INSERT INTO admin_sessions (id, user_id, token_hash, expires_at, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [createId(), userId, tokenHash, expiresAt, now, now],
  );

  return { token, expiresAt };
}

export async function destroyAdminSession(token: string) {
  await query("DELETE FROM admin_sessions WHERE token_hash = $1", [sha256(token)]);
}

export async function getAdminUserFromToken(token: string | undefined) {
  if (!token) return null;

  const { rows } = await query<AdminUser & { expires_at: string }>(
    `
      SELECT u.id, u.email, u.is_admin, s.expires_at
      FROM admin_sessions s
      JOIN admin_users u ON u.id = s.user_id
      WHERE s.token_hash = $1
      LIMIT 1
    `,
    [sha256(token)],
  );

  const row = rows[0];
  if (!row) return null;
  if (new Date(row.expires_at).getTime() <= Date.now()) {
    await query("DELETE FROM admin_sessions WHERE token_hash = $1", [sha256(token)]);
    return null;
  }

  return { id: row.id, email: row.email, is_admin: Boolean(row.is_admin) };
}

export async function getCurrentAdminUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  return getAdminUserFromToken(session);
}

export function buildSessionCookie(token: string, expiresAt: string) {
  return {
    name: SESSION_COOKIE,
    value: token,
    options: {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(expiresAt),
    },
  };
}

export function buildExpiredSessionCookie() {
  return {
    name: SESSION_COOKIE,
    value: "",
    options: {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(0),
    },
  };
}
