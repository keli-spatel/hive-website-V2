import Link from "next/link";
import { FileText, KeyRound, LogOut, ScrollText } from "lucide-react";
import { redirect } from "next/navigation";
import { adminButtonClassName } from "@/app/components/admin/adminButton";
import SignOutButton from "@/app/components/admin/SignOutButton";
import { getCurrentAdminUser } from "@/lib/auth";

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentAdminUser();
  if (!user) {
    redirect("/admin/login?next=/admin/blog");
  }
  if (!user.is_admin) {
    redirect("/admin/login?error=unauthorized");
  }

  return (
    <div className="admin-shell min-h-screen bg-white px-5 py-6 text-black sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-[1520px] gap-6 xl:gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="border border-[#E2E9F3] bg-white p-5 lg:sticky lg:top-6 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Hive Automation CMS</p>
          <nav className="mt-6 grid gap-2 text-sm">
            <Link className={adminButtonClassName({ variant: "nav" })} href="/admin/blog">
              <ScrollText size={16} />
              <span>Blog</span>
            </Link>
            <Link className={adminButtonClassName({ variant: "nav" })} href="/admin/api-keys">
              <KeyRound size={16} />
              <span>API keys</span>
            </Link>
            <Link className={adminButtonClassName({ variant: "nav" })} href="/admin/api-docs">
              <FileText size={16} />
              <span>API docs</span>
            </Link>
          </nav>
          <div className="mt-8 border-t border-[#E2E9F3] pt-4 text-sm text-[#686562]">{user.email}</div>
          <div className="mt-3">
            <SignOutButton className={adminButtonClassName({ variant: "nav" })}>
              <LogOut size={16} />
              <span>Sign out</span>
            </SignOutButton>
          </div>
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
