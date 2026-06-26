import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";
import { query } from "@/lib/db";
import { buildSessionCookie, createAdminSession, verifyPassword } from "@/lib/auth";
import { fail, ok } from "@/lib/http";
import { loginSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const originCheck = await headers();
  const origin = originCheck.get("origin");
  const host = originCheck.get("host");
  if (!origin || !host || new URL(origin).host !== host) {
    return fail("Invalid request origin.", { status: 403 });
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return fail("Invalid JSON payload.", { status: 400 });
  }

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return fail("Email and password are required.", { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for") ?? "local";
  const rate = checkRateLimit(`login:${ip}:${parsed.data.email}`, 6, 1000 * 60 * 10);
  if (!rate.allowed) {
    return fail("Too many sign-in attempts. Try again shortly.", { status: 429 });
  }

  const result = await query<{
    id: string;
    email: string;
    password_hash: string;
    is_admin: boolean;
  }>(
    "SELECT id, email, password_hash, is_admin FROM admin_users WHERE email = $1 LIMIT 1",
    [parsed.data.email],
  );
  const user = result.rows[0];

  if (!user) {
    return fail("Could not sign in. Check your credentials and try again.", { status: 401 });
  }

  const valid = await verifyPassword(parsed.data.password, user.password_hash);
  if (!valid) {
    return fail("Could not sign in. Check your credentials and try again.", { status: 401 });
  }

  if (!user.is_admin) {
    return fail("Your account is not allowed to access the CMS.", { status: 403 });
  }

  const session = await createAdminSession(user.id);
  const cookie = buildSessionCookie(session.token, session.expiresAt);
  const cookieStore = await cookies();
  cookieStore.set(cookie.name, cookie.value, cookie.options);

  return ok({ email: user.email }, { status: 200, message: "Signed in." });
}
