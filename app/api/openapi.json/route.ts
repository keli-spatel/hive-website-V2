import { openApiDocument } from "@/lib/openapi";

export async function GET() {
  return new Response(JSON.stringify(openApiDocument, null, 2), {
    headers: {
      "Content-Type": "application/vnd.oai.openapi+json; charset=utf-8",
      "Content-Disposition": 'attachment; filename="hive-automation-openapi.json"',
      "Cache-Control": "no-store",
    },
  });
}

