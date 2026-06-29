import { nowIso, query } from "./db";
import { createId, createOpaqueToken, sha256 } from "./ids";
import { sanitizeBlogHtml } from "./blog";
import { BlogPost } from "./cms-types";

type RowRecord = Record<string, unknown>;
type SerializedPostData = {
  title: string;
  slug: string;
  description: string;
  tldr: string | null;
  authors: string;
  category: string;
  reading_time: string | null;
  featured_image: string | null;
  content: string;
  faq_content: string;
  is_published: boolean;
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  seo_keywords: string;
  canonical_url: string | null;
  featured_image_alt: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  og_image_alt: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  twitter_image: string | null;
  twitter_image_alt: string | null;
  robots_index: boolean;
  robots_follow: boolean;
  schema_type: string;
};

type ApiKeyRecord = RowRecord & {
  id: string;
  name: string;
  key_hash?: string;
  key_prefix: string;
  key_last4: string;
  created_by?: string | null;
  created_by_email?: string | null;
  expires_at: string | null;
  revoked_at: string | null;
  last_used_at: string | null;
  created_at: string | null;
  updated_at: string | null;
};

function parseJson<T>(value: unknown, fallback: T) {
  if (value == null) return fallback;
  if (typeof value === "string") {
    try {
      return JSON.parse(value) as T;
    } catch {
      return fallback;
    }
  }
  return value as T;
}

function normalizeTimestamp(value: unknown) {
  if (!value) return null;
  if (value instanceof Date) return value.toISOString();
  return String(value);
}

export async function listAdminPosts() {
  const { rows } = await query<RowRecord>("SELECT * FROM blog_posts WHERE deleted_at IS NULL ORDER BY updated_at DESC");
  return rows.map(mapPostRow);
}

export async function getPostById(id: string) {
  const { rows } = await query<RowRecord>(
    "SELECT * FROM blog_posts WHERE id = $1 AND deleted_at IS NULL LIMIT 1",
    [id],
  );
  return rows[0] ? mapPostRow(rows[0]) : null;
}

export async function getPostBySlug(slug: string) {
  const { rows } = await query<RowRecord>(
    "SELECT * FROM blog_posts WHERE slug = $1 AND deleted_at IS NULL LIMIT 1",
    [slug],
  );
  return rows[0] ? mapPostRow(rows[0]) : null;
}

export async function listPublishedPosts(options: {
  limit?: number;
  category?: string;
  excludeSlug?: string;
} = {}) {
  const clauses = [
    "is_published = TRUE",
    "deleted_at IS NULL",
    "published_at IS NOT NULL",
  ];
  const params: unknown[] = [];

  if (options.category) {
    params.push(options.category);
    clauses.push(`category = $${params.length}`);
  }

  if (options.excludeSlug) {
    params.push(options.excludeSlug);
    clauses.push(`slug <> $${params.length}`);
  }

  let sql = `
    SELECT *
    FROM blog_posts
    WHERE ${clauses.join(" AND ")}
    ORDER BY published_at DESC, updated_at DESC
  `;

  if (options.limit) {
    params.push(options.limit);
    sql += ` LIMIT $${params.length}`;
  }

  const { rows } = await query<RowRecord>(sql, params);
  return rows.map(mapPostRow);
}

export async function getPublishedPostBySlug(slug: string) {
  const { rows } = await query<RowRecord>(
    `
      SELECT *
      FROM blog_posts
      WHERE slug = $1
        AND is_published = TRUE
        AND deleted_at IS NULL
        AND published_at IS NOT NULL
      LIMIT 1
    `,
    [slug],
  );
  return rows[0] ? mapPostRow(rows[0]) : null;
}

export async function listPublishedCategories() {
  const { rows } = await query<{ category: string }>(
    `
      SELECT DISTINCT category
      FROM blog_posts
      WHERE is_published = TRUE
        AND deleted_at IS NULL
        AND published_at IS NOT NULL
      ORDER BY category ASC
    `,
  );
  return rows.map((row) => row.category);
}

export async function createPost(data: Record<string, unknown>) {
  const now = nowIso();
  const id = createId();
  const publishedAt = data.is_published ? String(data.published_at ?? now) : null;
  const serialized = serializePostData(data);

  await query(
    `
      INSERT INTO blog_posts (
        id, title, slug, description, tldr, authors, published_at, category, reading_time,
        featured_image, content, faq_content, is_published, deleted_at, meta_title,
        meta_description, focus_keyword, seo_keywords, canonical_url, featured_image_alt,
        og_title, og_description, og_image, og_image_alt, twitter_title,
        twitter_description, twitter_image, twitter_image_alt, robots_index, robots_follow,
        schema_type, created_at, updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6::jsonb, $7, $8, $9, $10, $11, $12::jsonb, $13, NULL, $14,
        $15, $16, $17::jsonb, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29,
        $30, $31, $32
      )
    `,
    [
      id,
      serialized.title,
      serialized.slug,
      serialized.description,
      serialized.tldr,
      serialized.authors,
      publishedAt,
      serialized.category,
      serialized.reading_time,
      serialized.featured_image,
      serialized.content,
      serialized.faq_content,
      serialized.is_published,
      serialized.meta_title,
      serialized.meta_description,
      serialized.focus_keyword,
      serialized.seo_keywords,
      serialized.canonical_url,
      serialized.featured_image_alt,
      serialized.og_title,
      serialized.og_description,
      serialized.og_image,
      serialized.og_image_alt,
      serialized.twitter_title,
      serialized.twitter_description,
      serialized.twitter_image,
      serialized.twitter_image_alt,
      serialized.robots_index,
      serialized.robots_follow,
      serialized.schema_type,
      now,
      now,
    ],
  );

  return getPostById(id);
}

export async function updatePost(id: string, data: Record<string, unknown>) {
  const serialized = serializePostData(data);
  const publishedAt = data.is_published ? String(data.published_at ?? nowIso()) : null;

  await query(
    `
      UPDATE blog_posts SET
        title = $2,
        slug = $3,
        description = $4,
        tldr = $5,
        authors = $6::jsonb,
        published_at = $7,
        category = $8,
        reading_time = $9,
        featured_image = $10,
        content = $11,
        faq_content = $12::jsonb,
        is_published = $13,
        meta_title = $14,
        meta_description = $15,
        focus_keyword = $16,
        seo_keywords = $17::jsonb,
        canonical_url = $18,
        featured_image_alt = $19,
        og_title = $20,
        og_description = $21,
        og_image = $22,
        og_image_alt = $23,
        twitter_title = $24,
        twitter_description = $25,
        twitter_image = $26,
        twitter_image_alt = $27,
        robots_index = $28,
        robots_follow = $29,
        schema_type = $30,
        updated_at = $31
      WHERE id = $1 AND deleted_at IS NULL
    `,
    [
      id,
      serialized.title,
      serialized.slug,
      serialized.description,
      serialized.tldr,
      serialized.authors,
      publishedAt,
      serialized.category,
      serialized.reading_time,
      serialized.featured_image,
      serialized.content,
      serialized.faq_content,
      serialized.is_published,
      serialized.meta_title,
      serialized.meta_description,
      serialized.focus_keyword,
      serialized.seo_keywords,
      serialized.canonical_url,
      serialized.featured_image_alt,
      serialized.og_title,
      serialized.og_description,
      serialized.og_image,
      serialized.og_image_alt,
      serialized.twitter_title,
      serialized.twitter_description,
      serialized.twitter_image,
      serialized.twitter_image_alt,
      serialized.robots_index,
      serialized.robots_follow,
      serialized.schema_type,
      nowIso(),
    ],
  );

  return getPostById(id);
}

export async function softDeletePost(id: string) {
  const now = nowIso();
  await query(
    "UPDATE blog_posts SET deleted_at = $1, updated_at = $2 WHERE id = $3 AND deleted_at IS NULL",
    [now, now, id],
  );
}

export async function listApiKeys() {
  const { rows } = await query<RowRecord>("SELECT * FROM blog_api_keys ORDER BY created_at DESC");
  return rows.map(mapApiKeyRow);
}

export async function createApiKey(input: {
  name: string;
  expires_at?: string | null;
  created_by?: string | null;
  created_by_email?: string | null;
}) {
  const secret = `sl_blog_${createOpaqueToken(32)}`;
  const now = nowIso();
  const id = createId();

  await query(
    `
      INSERT INTO blog_api_keys (
        id, name, key_hash, key_prefix, key_last4, created_by, created_by_email,
        expires_at, revoked_at, last_used_at, created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NULL, NULL, $9, $10)
    `,
    [
      id,
      input.name,
      sha256(secret),
      secret.slice(0, 10),
      secret.slice(-4),
      input.created_by ?? null,
      input.created_by_email ?? null,
      input.expires_at ?? null,
      now,
      now,
    ],
  );

  return { id, secret };
}

export async function regenerateApiKey(id: string) {
  const secret = `sl_blog_${createOpaqueToken(32)}`;
  await query(
    `
      UPDATE blog_api_keys
      SET key_hash = $1, key_prefix = $2, key_last4 = $3, revoked_at = NULL, last_used_at = NULL, updated_at = $4
      WHERE id = $5
    `,
    [sha256(secret), secret.slice(0, 10), secret.slice(-4), nowIso(), id],
  );
  return secret;
}

export async function revokeApiKey(id: string) {
  await query("UPDATE blog_api_keys SET revoked_at = $1, updated_at = $2 WHERE id = $3", [nowIso(), nowIso(), id]);
}

export async function deleteApiKey(id: string) {
  await query("DELETE FROM blog_api_keys WHERE id = $1", [id]);
}

export async function getApiKeyBySecret(secret: string) {
  const { rows } = await query<RowRecord>(
    "SELECT * FROM blog_api_keys WHERE key_hash = $1 LIMIT 1",
    [sha256(secret)],
  );
  return rows[0] ? mapApiKeyRow(rows[0]) : null;
}

export async function touchApiKeyLastUsed(id: string) {
  await query("UPDATE blog_api_keys SET last_used_at = $1, updated_at = $2 WHERE id = $3", [nowIso(), nowIso(), id]);
}

function serializePostData(data: Record<string, unknown>): SerializedPostData {
  return {
    title: String(data.title ?? ""),
    slug: String(data.slug ?? ""),
    description: String(data.description ?? ""),
    authors: JSON.stringify(data.authors ?? []),
    faq_content: JSON.stringify(data.faq_content ?? []),
    seo_keywords: JSON.stringify(data.seo_keywords ?? []),
    content: sanitizeBlogHtml(String(data.content ?? "")),
    is_published: Boolean(data.is_published),
    robots_index: Boolean(data.robots_index),
    robots_follow: Boolean(data.robots_follow),
    tldr: typeof data.tldr === "string" && data.tldr ? data.tldr : null,
    category: String(data.category ?? ""),
    reading_time: typeof data.reading_time === "string" && data.reading_time ? data.reading_time : null,
    featured_image: typeof data.featured_image === "string" && data.featured_image ? data.featured_image : null,
    meta_title: typeof data.meta_title === "string" && data.meta_title ? data.meta_title : null,
    meta_description: typeof data.meta_description === "string" && data.meta_description ? data.meta_description : null,
    focus_keyword: typeof data.focus_keyword === "string" && data.focus_keyword ? data.focus_keyword : null,
    canonical_url: typeof data.canonical_url === "string" && data.canonical_url ? data.canonical_url : null,
    featured_image_alt: typeof data.featured_image_alt === "string" && data.featured_image_alt ? data.featured_image_alt : null,
    og_title: typeof data.og_title === "string" && data.og_title ? data.og_title : null,
    og_description: typeof data.og_description === "string" && data.og_description ? data.og_description : null,
    og_image: typeof data.og_image === "string" && data.og_image ? data.og_image : null,
    og_image_alt: typeof data.og_image_alt === "string" && data.og_image_alt ? data.og_image_alt : null,
    twitter_title: typeof data.twitter_title === "string" && data.twitter_title ? data.twitter_title : null,
    twitter_description: typeof data.twitter_description === "string" && data.twitter_description ? data.twitter_description : null,
    twitter_image: typeof data.twitter_image === "string" && data.twitter_image ? data.twitter_image : null,
    twitter_image_alt: typeof data.twitter_image_alt === "string" && data.twitter_image_alt ? data.twitter_image_alt : null,
    schema_type: String(data.schema_type ?? "BlogPosting"),
  };
}

function mapPostRow(row: RowRecord): BlogPost {
  return {
    ...row,
    authors: parseJson(row.authors, []),
    faq_content: parseJson(row.faq_content, []),
    seo_keywords: parseJson(row.seo_keywords, []),
    published_at: normalizeTimestamp(row.published_at),
    deleted_at: normalizeTimestamp(row.deleted_at),
    created_at: normalizeTimestamp(row.created_at) ?? nowIso(),
    updated_at: normalizeTimestamp(row.updated_at) ?? nowIso(),
    is_published: Boolean(row.is_published),
    robots_index: Boolean(row.robots_index),
    robots_follow: Boolean(row.robots_follow),
  } as unknown as BlogPost;
}

function mapApiKeyRow(row: RowRecord): ApiKeyRecord {
  return {
    ...row,
    id: String(row.id ?? ""),
    name: String(row.name ?? ""),
    key_hash: typeof row.key_hash === "string" ? row.key_hash : undefined,
    key_prefix: String(row.key_prefix ?? ""),
    key_last4: String(row.key_last4 ?? ""),
    created_by: typeof row.created_by === "string" ? row.created_by : null,
    created_by_email: typeof row.created_by_email === "string" ? row.created_by_email : null,
    expires_at: normalizeTimestamp(row.expires_at),
    revoked_at: normalizeTimestamp(row.revoked_at),
    last_used_at: normalizeTimestamp(row.last_used_at),
    created_at: normalizeTimestamp(row.created_at),
    updated_at: normalizeTimestamp(row.updated_at),
  };
}
