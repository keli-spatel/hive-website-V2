import sanitizeHtml from "sanitize-html";
import { normalizeSlug, isValidSlug } from "./slug";

export const BLOG_CATEGORIES = [
  "Automation",
  "Agentic AI",
  "Browser Automation",
  "Operations",
  "Engineering",
  "Company",
] as const;

export const BLOG_SCHEMA_TYPES = ["BlogPosting", "Article", "TechArticle"] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
export type BlogSchemaType = (typeof BLOG_SCHEMA_TYPES)[number];

export type BlogAuthor = {
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
  profile_url?: string;
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export function parseAuthorLines(input: string) {
  return input
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map<BlogAuthor>((line) => {
      const [namePart, rolePart, avatarPart] = line.split("|").map((part) => part.trim());
      return {
        name: namePart,
        role: rolePart || undefined,
        avatar: avatarPart || undefined,
      };
    });
}

export function parseKeywordList(input: string) {
  return input
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function normalizeCanonicalUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (trimmed.startsWith("/")) return trimmed;
  if (/\s/.test(trimmed)) return trimmed;
  return `/${trimmed}`;
}

export function isValidCanonicalUrl(value: string) {
  if (!value.trim()) return true;
  if (/^https?:\/\//i.test(value)) return !/\s/.test(value);
  return value.startsWith("/") && !/\s/.test(value);
}

export function sanitizeBlogHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "pre",
      "code",
      "span",
    ]),
    allowedAttributes: {
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "width", "height"],
      "*": ["style", "class", "data-language", "data-color", "text-align"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowProtocolRelative: false,
  });
}

export function estimateReadingTime(html: string) {
  const plain = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = plain ? plain.split(" ").length : 0;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

export function validateSlugOrThrow(slug: string) {
  const normalized = normalizeSlug(slug);
  if (!normalized || !isValidSlug(normalized)) {
    throw new Error("Slug must contain only lowercase letters, numbers, and hyphens.");
  }
  return normalized;
}

export function formatBlogDate(value: string | null) {
  if (!value) return null;
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function absoluteBlogUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `https://hiveautomation.in${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}
