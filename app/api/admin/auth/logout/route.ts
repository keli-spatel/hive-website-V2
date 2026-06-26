import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { buildExpiredSessionCookie, destroyAdminSession, getSessionCookieName } from "@/lib/auth";
import { fail, ok } from "@/lib/http";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host || new URL(origin).host !== host) {
    return fail("Invalid request origin.", { status: 403 });
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  if (token) {
    await destroyAdminSession(token);
  }
  const expired = buildExpiredSessionCookie();
  cookieStore.set(expired.name, expired.value, expired.options);

  return ok({ loggedOut: true });
}

