import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");

  if (pathname === "/admin/login") {
    return response;
  }

  const sessionCookie = request.cookies.get("hive_admin_session")?.value;
  if (!sessionCookie) {
    const redirectUrl = new URL("/admin/login", request.url);
    const next = `${pathname}${search}`;
    if (next.startsWith("/admin") && next !== "/admin/login") {
      redirectUrl.searchParams.set("next", next);
    }
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
