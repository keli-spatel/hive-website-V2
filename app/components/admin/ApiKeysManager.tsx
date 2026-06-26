"use client";

import { Copy, FileText, KeyRound, RefreshCcw, ShieldCheck, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminButtonClassName } from "./adminButton";

type ApiKeyRecord = {
  id: string;
  name: string;
  key_prefix: string;
  key_last4: string;
  created_by_email?: string | null;
  expires_at?: string | null;
  revoked_at?: string | null;
  last_used_at?: string | null;
};

const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

export default function ApiKeysManager({ initialKeys }: { initialKeys: ApiKeyRecord[] }) {
  const router = useRouter();
  const [now] = useState(() => Date.now());
  const [name, setName] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function createKey() {
    setPending(true);
    const response = await fetch("/api/admin/blog-api-keys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, expires_at: expiresAt || null }),
    });
    const data = await response.json();
    setPending(false);
    if (response.ok) {
      setGeneratedKey(data.data.secret);
      setName("");
      setExpiresAt("");
      router.refresh();
    }
  }

  async function regenerateKey(id: string, name: string) {
    if (!window.confirm(`Regenerate "${name}"? The old key value will stop working immediately.`)) return;
    const response = await fetch(`/api/admin/blog-api-keys/${id}/regenerate`, { method: "POST" });
    const data = await response.json();
    if (response.ok) {
      setGeneratedKey(data.data.secret);
      router.refresh();
    }
  }

  async function revokeKey(id: string, name: string) {
    if (!window.confirm(`Revoke "${name}"? Requests using this key will immediately return 401.`)) return;
    await fetch(`/api/admin/blog-api-keys/${id}/revoke`, { method: "POST" });
    router.refresh();
  }

  async function deleteKey(id: string) {
    await fetch(`/api/admin/blog-api-keys/${id}`, { method: "DELETE" });
    router.refresh();
  }

  return (
    <div className="grid gap-6">
      <header className="border-b border-[#E2E9F3] pb-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Hive Automation CMS</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-[34px] font-medium leading-[39px] text-black">Blog API keys</h1>
            <p className="mt-2 text-sm text-[#686562]">Secure access for systems that create internal blog drafts.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className={adminButtonClassName({ variant: "secondary" })} href="/admin/api-docs">
              <FileText size={16} />
              <span>API docs</span>
            </Link>
            <Link className={adminButtonClassName({ variant: "secondary" })} href="/admin/blog">
              <span>Back to posts</span>
            </Link>
          </div>
        </div>
      </header>

      {generatedKey ? (
        <section className="border border-[#E2E9F3] bg-white p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Copy once</p>
          <h2 className="mt-2 text-2xl font-medium text-black">New API key</h2>
          <p className="mt-2 text-sm text-[#686562]">Store this value securely. The CMS only keeps a hash and will not show it again.</p>
          <div className="mt-4 overflow-x-auto border border-[#E2E9F3] bg-[#F8FAFC] p-4 font-mono text-sm">{generatedKey}</div>
          <button className={adminButtonClassName({ variant: "primary" }, "mt-4")} onClick={() => navigator.clipboard.writeText(generatedKey)} type="button">
            <Copy size={16} />
            <span>Copy key</span>
          </button>
        </section>
      ) : null}

      <section className="border border-[#E2E9F3] bg-white p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Internal Blog API</p>
        <h2 className="mt-2 text-2xl font-medium text-black">Generate API key</h2>
        <div className="mt-4 grid gap-3 xl:grid-cols-[minmax(0,1fr)_220px_auto]">
          <input className="h-11 border border-[#E2E9F3] px-3" placeholder="n8n blog draft workflow" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="h-11 border border-[#E2E9F3] px-3" type="datetime-local" value={expiresAt} onChange={(e) => setExpiresAt(e.target.value)} />
          <button className={adminButtonClassName({ variant: "primary" })} disabled={pending || !name.trim()} onClick={createKey} type="button">
            <KeyRound size={16} />
            <span>{pending ? "Generating..." : "Generate"}</span>
          </button>
        </div>
      </section>

      <section className="border border-[#E2E9F3] bg-white">
        <div className="flex items-center justify-between border-b border-[#E2E9F3] bg-[#F8FAFC] px-5 py-3">
          <div className="flex items-center gap-2 text-sm font-medium text-black">
            <ShieldCheck size={16} />
            <span>Existing keys</span>
          </div>
          <span className="text-sm text-[#686562]">{initialKeys.length} total</span>
        </div>
        {!initialKeys.length ? (
          <div className="p-5 text-sm text-[#686562]">No API keys yet.</div>
        ) : (
          <div className="divide-y divide-[#E2E9F3]">
            {initialKeys.map((key) => {
              const isExpired = key.expires_at ? new Date(key.expires_at).getTime() <= now : false;
              const status = key.revoked_at
                ? { label: "Revoked", cls: "text-[#686562]" }
                : isExpired
                  ? { label: "Expired", cls: "text-[#CC3810]" }
                  : { label: "Active", cls: "text-[#047857]" };
              return (
                <div key={key.id} className="grid gap-3 px-5 py-4 xl:grid-cols-[minmax(0,1.3fr)_140px_170px_210px_130px] xl:items-start">
                  <div>
                    <p className="text-sm font-medium text-black">{key.name}</p>
                    <p className="mt-1 text-sm text-[#686562]">{key.key_prefix}...{key.key_last4}</p>
                    {key.created_by_email ? <p className="mt-1 text-xs text-[#686562]">Created by {key.created_by_email}</p> : null}
                  </div>
                  <div className={`text-sm ${status.cls}`}>{status.label}</div>
                  <div className="text-sm text-[#686562]">{key.expires_at ? dateTimeFormatter.format(new Date(key.expires_at)) : "Never"}</div>
                  <div className="text-sm text-[#686562]">{key.last_used_at ? dateTimeFormatter.format(new Date(key.last_used_at)) : "Never"}</div>
                  <div className="flex gap-2">
                    <button aria-label="Regenerate key" className={adminButtonClassName({ variant: "icon" })} onClick={() => regenerateKey(key.id, key.name)} title="Regenerate" type="button">
                      <RefreshCcw size={16} />
                    </button>
                    <button aria-label="Revoke key" className={adminButtonClassName({ variant: "icon" })} disabled={!!key.revoked_at} onClick={() => revokeKey(key.id, key.name)} title="Revoke" type="button">
                      <KeyRound size={16} />
                    </button>
                    <button aria-label="Delete key" className={adminButtonClassName({ variant: "icon" })} onClick={() => deleteKey(key.id)} title="Delete" type="button">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
