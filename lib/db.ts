import { Pool, type QueryResultRow } from "pg";

declare global {
  var __hiveCmsPool: Pool | undefined;
  var __hiveCmsInitPromise: Promise<void> | undefined;
}

function getDatabaseUrl() {
  const value = process.env.DATABASE_URL?.trim();
  if (!value) {
    throw new Error("DATABASE_URL is not set. Add your PostgreSQL connection string to .env.");
  }
  return value;
}

function createPool() {
  const databaseUrl = getDatabaseUrl();
  const useSsl = process.env.POSTGRES_SSL === "true" || process.env.NODE_ENV === "production";

  return new Pool({
    connectionString: databaseUrl,
    ssl: useSsl ? { rejectUnauthorized: false } : undefined,
  });
}

export function getDb() {
  if (!globalThis.__hiveCmsPool) {
    globalThis.__hiveCmsPool = createPool();
  }
  return globalThis.__hiveCmsPool;
}

async function initializeDatabase() {
  const pool = getDb();

  await pool.query(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      is_admin BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMPTZ NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL
    );

    CREATE TABLE IF NOT EXISTS admin_sessions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES admin_users(id) ON DELETE CASCADE,
      token_hash TEXT NOT NULL UNIQUE,
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL
    );

    CREATE TABLE IF NOT EXISTS blog_posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL,
      description TEXT NOT NULL,
      tldr TEXT,
      authors JSONB NOT NULL DEFAULT '[]'::jsonb,
      published_at TIMESTAMPTZ,
      category TEXT NOT NULL,
      reading_time TEXT,
      featured_image TEXT,
      content TEXT NOT NULL DEFAULT '',
      faq_content JSONB NOT NULL DEFAULT '[]'::jsonb,
      is_published BOOLEAN NOT NULL DEFAULT FALSE,
      deleted_at TIMESTAMPTZ,
      meta_title TEXT,
      meta_description TEXT,
      focus_keyword TEXT,
      seo_keywords JSONB NOT NULL DEFAULT '[]'::jsonb,
      canonical_url TEXT,
      featured_image_alt TEXT,
      og_title TEXT,
      og_description TEXT,
      og_image TEXT,
      og_image_alt TEXT,
      twitter_title TEXT,
      twitter_description TEXT,
      twitter_image TEXT,
      twitter_image_alt TEXT,
      robots_index BOOLEAN NOT NULL DEFAULT TRUE,
      robots_follow BOOLEAN NOT NULL DEFAULT TRUE,
      schema_type TEXT NOT NULL DEFAULT 'BlogPosting',
      created_at TIMESTAMPTZ NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL,
      CHECK (schema_type IN ('BlogPosting', 'Article', 'TechArticle')),
      CHECK (jsonb_typeof(authors) = 'array'),
      CHECK (jsonb_typeof(faq_content) = 'array'),
      CHECK (jsonb_typeof(seo_keywords) = 'array')
    );

    CREATE UNIQUE INDEX IF NOT EXISTS idx_blog_posts_slug_active
      ON blog_posts(slug)
      WHERE deleted_at IS NULL;

    CREATE INDEX IF NOT EXISTS idx_blog_posts_updated_at
      ON blog_posts(updated_at DESC);

    CREATE INDEX IF NOT EXISTS idx_blog_posts_published
      ON blog_posts(is_published, published_at DESC);

    CREATE INDEX IF NOT EXISTS idx_blog_posts_category
      ON blog_posts(category);

    CREATE INDEX IF NOT EXISTS idx_blog_posts_deleted_at
      ON blog_posts(deleted_at);

    CREATE INDEX IF NOT EXISTS idx_blog_posts_focus_keyword
      ON blog_posts(focus_keyword);

    CREATE TABLE IF NOT EXISTS blog_api_keys (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      key_hash TEXT NOT NULL UNIQUE,
      key_prefix TEXT NOT NULL,
      key_last4 TEXT NOT NULL,
      created_by TEXT,
      created_by_email TEXT,
      expires_at TIMESTAMPTZ,
      revoked_at TIMESTAMPTZ,
      last_used_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_blog_api_keys_created_at
      ON blog_api_keys(created_at DESC);

    CREATE TABLE IF NOT EXISTS audit_logs (
      id TEXT PRIMARY KEY,
      actor_email TEXT,
      action TEXT NOT NULL,
      entity_type TEXT NOT NULL,
      entity_id TEXT,
      detail TEXT,
      created_at TIMESTAMPTZ NOT NULL
    );
  `);
}

export async function ensureDb() {
  if (!globalThis.__hiveCmsInitPromise) {
    globalThis.__hiveCmsInitPromise = initializeDatabase();
  }
  return globalThis.__hiveCmsInitPromise;
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params: unknown[] = [],
) {
  await ensureDb();
  return getDb().query<T>(text, params);
}

export function nowIso() {
  return new Date().toISOString();
}
