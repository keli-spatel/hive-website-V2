import { getCurrentAdminUser } from "@/lib/auth";
import { fail, ok } from "@/lib/http";

export async function GET() {
  const user = await getCurrentAdminUser();
  if (!user || !user.is_admin) {
    return fail("Unauthorized", { status: 401 });
  }
  return ok({ email: user.email, id: user.id });
}

