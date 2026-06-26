import ApiKeysManager from "@/app/components/admin/ApiKeysManager";
import { listApiKeys } from "@/lib/repo";

export default async function AdminApiKeysPage() {
  const keys = await listApiKeys();
  return <ApiKeysManager initialKeys={keys as never} />;
}
