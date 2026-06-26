import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { nowIso, query } from "../lib/db";
import { createId } from "../lib/ids";
import { hashPassword } from "../lib/auth";

async function main() {
  const emailArg = process.argv.find((arg) => arg.startsWith("--email="));
  const passwordArg = process.argv.find((arg) => arg.startsWith("--password="));

  let email = emailArg?.slice("--email=".length).trim().toLowerCase() ?? "";
  let password = passwordArg?.slice("--password=".length) ?? "";

  if (!email || !password) {
    const rl = readline.createInterface({ input, output });
    email = email || (await rl.question("Admin email: ")).trim().toLowerCase();
    password = password || await rl.question("Password: ");
    rl.close();
  }

  if (!email || !password) {
    console.error("Email and password are required.");
    process.exit(1);
  }

  const existing = await query<{ id: string }>(
    "SELECT id FROM admin_users WHERE email = $1 LIMIT 1",
    [email],
  );
  const now = nowIso();
  const passwordHash = await hashPassword(password);

  if (existing.rows[0]) {
    await query(
      "UPDATE admin_users SET password_hash = $1, updated_at = $2 WHERE id = $3",
      [passwordHash, now, existing.rows[0].id],
    );
    console.log(`Updated admin credentials for ${email}`);
    return;
  }

  await query(
    `
      INSERT INTO admin_users (id, email, password_hash, is_admin, created_at, updated_at)
      VALUES ($1, $2, $3, TRUE, $4, $5)
    `,
    [createId(), email, passwordHash, now, now],
  );

  console.log(`Created admin user ${email}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
