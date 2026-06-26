import { cookies, headers } from "next/headers";
import { getCurrentAdminUser, getSessionCookieName, getAdminUserFromToken } from "./auth";
import { fail } from "./http";

export async function requireAdminOrResponse() {
  const user = await getCurrentAdminUser();
  if (!user) {
    return { response: fail("Unauthorized", { status: 401 }), user: null };
  }
  if (!user.is_admin) {
    return { response: fail("Unauthorized", { status: 403 }), user: null };
  }
  return { response: null, user };
}

export async function getCurrentAdminEmail() {
  const user = await getCurrentAdminUser();
  return user?.email ?? null;
}

export async function requireCsrfOrResponse() {
  const headerStore = await headers();
  const origin = headerStore.get("origin");
  const host = headerStore.get("host");

  if (!origin || !host) {
    return fail("Invalid request origin.", { status: 403 });
  }

  try {
    const originUrl = new URL(origin);
    if (originUrl.host !== host) {
      return fail("Invalid request origin.", { status: 403 });
    }
  } catch {
    return fail("Invalid request origin.", { status: 403 });
  }

  return null;
}

export async function getAdminFromCookieStore() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  return getAdminUserFromToken(token);
}

