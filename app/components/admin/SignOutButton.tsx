"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export default function SignOutButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  return (
    <button
      className={className}
      disabled={pending}
      onClick={async () => {
        setPending(true);
        await fetch("/api/admin/auth/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
      }}
      type="button"
    >
      {children}
    </button>
  );
}

