import { redirect } from "next/navigation";
import LoginForm from "@/app/components/admin/LoginForm";
import { getCurrentAdminUser } from "@/lib/auth";

export default async function AdminLoginPage() {
  const user = await getCurrentAdminUser();
  if (user?.is_admin) {
    redirect("/admin/blog");
  }

  return (
    <div className="admin-shell min-h-screen bg-white px-4 py-16">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1520px] items-center justify-center">
        <div className="w-full max-w-[448px] border border-[#E2E9F3] bg-white p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Hive Automation CMS</p>
          <h1 className="mt-3 text-[34px] font-medium leading-[39px] text-black">Admin login</h1>
          <p className="mt-3 text-sm leading-6 text-[#686562]">
            Sign in with your approved admin account to manage blog content.
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
