import Link from "next/link";
import { Download, KeyRound } from "lucide-react";
import { adminButtonClassName } from "@/app/components/admin/adminButton";
import { openApiDocument } from "@/lib/openapi";

const endpointRows = Object.entries(openApiDocument.paths).flatMap(([path, operations]) =>
  Object.entries(operations).map(([method, operation]) => ({
    path,
    method: method.toUpperCase(),
    group: operation.tags?.[0] ?? "API",
    summary: operation.summary,
    auth: operation.security?.[0]?.ApiKeyAuth ? "X-API-Key" : "Session",
  })),
);

export default function AdminApiDocsPage() {
  return (
    <div className="grid gap-6">
      <header className="border-b border-[#E2E9F3] pb-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Hive Automation CMS</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-[34px] font-medium leading-[39px] text-black">API documentation</h1>
            <p className="mt-2 text-sm text-[#686562]">Current reference for the Machine Blog API only.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className={adminButtonClassName({ variant: "primary" })} href="/api/openapi.json">
              <Download size={16} />
              <span>Download OpenAPI</span>
            </a>
            <Link className={adminButtonClassName({ variant: "secondary" })} href="/admin/api-keys">
              <KeyRound size={16} />
              <span>API keys</span>
            </Link>
            <Link className={adminButtonClassName({ variant: "secondary" })} href="/admin/blog">
              <span>Back to posts</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="border border-[#E2E9F3] bg-white p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">OpenAPI 3.1</p>
        <h2 className="mt-2 text-2xl font-medium text-black">Export the current API</h2>
        <p className="mt-2 text-sm text-[#686562]">Download the generated JSON for the six machine blog endpoints.</p>
      </section>

      <section className="border border-[#E2E9F3] bg-white p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Authentication</p>
        <h2 className="mt-2 text-2xl font-medium text-black">Headers</h2>
        <pre className="mt-4 overflow-x-auto border border-[#E2E9F3] bg-[#F8FAFC] p-4 font-mono text-sm">{`Content-Type: application/json\nX-API-Key: <API_KEY>`}</pre>
      </section>

      <section className="border border-[#E2E9F3] bg-white p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Endpoints</p>
        <h2 className="mt-2 text-2xl font-medium text-black">Available operations</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border border-[#E2E9F3] bg-[#F8FAFC]">
                <th className="px-3 py-2">Operation</th>
                <th className="px-3 py-2">Group</th>
                <th className="px-3 py-2">Method</th>
                <th className="px-3 py-2">Path</th>
                <th className="px-3 py-2">Authentication</th>
              </tr>
            </thead>
            <tbody>
              {endpointRows.map((row) => (
                <tr key={`${row.method}:${row.path}`} className="border border-[#E2E9F3]">
                  <td className="px-3 py-2">{row.summary}</td>
                  <td className="px-3 py-2">{row.group}</td>
                  <td className="px-3 py-2">{row.method}</td>
                  <td className="px-3 py-2 font-mono text-xs">{row.path}</td>
                  <td className="px-3 py-2">{row.auth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border border-[#E2E9F3] bg-white p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Examples</p>
        <h2 className="mt-2 text-2xl font-medium text-black">Common request patterns</h2>
        <pre className="mt-4 overflow-x-auto border border-[#E2E9F3] bg-[#F8FAFC] p-4 font-mono text-sm">{`POST /api/blogs\nGET /api/blogs?status=all\nGET /api/blogs/{id}\nPATCH /api/blogs/{id}\nPOST /api/blogs/{id}/publish\nDELETE /api/blogs/{id}`}</pre>
      </section>
    </div>
  );
}
