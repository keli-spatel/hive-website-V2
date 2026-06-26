import Link from "next/link";
import { FileText, KeyRound, Plus } from "lucide-react";
import { adminButtonClassName } from "@/app/components/admin/adminButton";
import BlogListTable from "@/app/components/admin/BlogListTable";
import SignOutButton from "@/app/components/admin/SignOutButton";
import { getCurrentAdminUser } from "@/lib/auth";
import { listAdminPosts } from "@/lib/repo";

export default async function AdminBlogPage() {
  const user = await getCurrentAdminUser();
  const posts = await listAdminPosts();

  return (
    <div className="grid gap-6">
      <header className="border-b border-[#E2E9F3] pb-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Hive Automation CMS</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-[34px] font-medium leading-[39px] text-black">Blog posts</h1>
            <p className="mt-2 text-sm text-[#686562]">Signed in as {user?.email}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link className={adminButtonClassName({ variant: "secondary" })} href="/admin/api-docs">
              <FileText size={16} />
              <span>API docs</span>
            </Link>
            <Link className={adminButtonClassName({ variant: "secondary" })} href="/admin/api-keys">
              <KeyRound size={16} />
              <span>API keys</span>
            </Link>
            <Link className={adminButtonClassName({ variant: "primary" })} href="/admin/blog/new">
              <Plus size={16} />
              <span>New post</span>
            </Link>
            <SignOutButton className={adminButtonClassName({ variant: "text" })}>Sign out</SignOutButton>
          </div>
        </div>
      </header>
      <BlogListTable posts={posts as never} />
    </div>
  );
}
