"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { adminButtonClassName } from "./adminButton";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(
    searchParams.get("error") === "unauthorized"
      ? "Your account is not allowed to access the CMS."
      : null,
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !password) {
      setError("Email and password are required.");
      return;
    }

    setPending(true);
    setError(null);
    const next = searchParams.get("next");
    const safeNext = next && next.startsWith("/admin") && next !== "/admin/login" ? next : "/admin/blog";

    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Could not sign in. Check your credentials and try again.");
        return;
      }
      router.push(safeNext);
      router.refresh();
    } catch {
      setError("The CMS could not reach the server. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
      {error ? (
        <div className="border border-[#FF4500] bg-[#FFFDE6] px-4 py-3 text-sm text-[#CC3810]">{error}</div>
      ) : null}
      <label className="grid gap-2 text-sm text-black">
        <span>Email</span>
        <input
          className="h-11 border border-[#E2E9F3] px-3 outline-none focus:border-[#00B0FF]"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label className="grid gap-2 text-sm text-black">
        <span>Password</span>
        <input
          className="h-11 border border-[#E2E9F3] px-3 outline-none focus:border-[#00B0FF]"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button
        className={adminButtonClassName({ variant: "primary", width: "full" }, "mt-2")}
        disabled={pending}
        type="submit"
      >
        {pending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
