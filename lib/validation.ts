import { z } from "zod";
import {
  BLOG_CATEGORIES,
  BLOG_SCHEMA_TYPES,
  isValidCanonicalUrl,
  normalizeCanonicalUrl,
  parseKeywordList,
} from "./blog";
import { normalizeSlug } from "./slug";

const faqItemSchema = z.object({
  question: z.string().trim(),
  answer: z.string().trim(),
});

const authorSchema = z.object({
  name: z.string().trim().min(1),
  role: z.string().trim().optional(),
  avatar: z.string().trim().optional(),
  bio: z.string().trim().optional(),
  profile_url: z.string().trim().optional(),
});

export const blogPostInputSchema = z
  .object({
    title: z.string().trim().min(1, "Title is required."),
    slug: z.string().trim().min(1, "Slug is required."),
    description: z.string().trim().min(1, "Description is required."),
    tldr: z.string().optional().nullable(),
    authors: z.array(authorSchema).default([]),
    category: z.enum(BLOG_CATEGORIES),
    reading_time: z.string().trim().optional().nullable(),
    featured_image: z.string().trim().optional().nullable(),
    content: z.string().default(""),
    faq_content: z.array(faqItemSchema).default([]),
    is_published: z.boolean().default(false),
    meta_title: z.string().trim().max(70).optional().nullable(),
    meta_description: z.string().trim().max(170).optional().nullable(),
    focus_keyword: z.string().trim().optional().nullable(),
    seo_keywords: z.array(z.string().trim()).default([]),
    canonical_url: z.string().trim().optional().nullable(),
    featured_image_alt: z.string().trim().optional().nullable(),
    og_title: z.string().trim().optional().nullable(),
    og_description: z.string().trim().optional().nullable(),
    og_image: z.string().trim().optional().nullable(),
    og_image_alt: z.string().trim().optional().nullable(),
    twitter_title: z.string().trim().optional().nullable(),
    twitter_description: z.string().trim().optional().nullable(),
    twitter_image: z.string().trim().optional().nullable(),
    twitter_image_alt: z.string().trim().optional().nullable(),
    robots_index: z.boolean().default(true),
    robots_follow: z.boolean().default(true),
    schema_type: z.enum(BLOG_SCHEMA_TYPES),
    published_at: z.string().trim().optional().nullable(),
  })
  .superRefine((value, ctx) => {
    if (!value.slug || normalizeSlug(value.slug) !== value.slug) {
      ctx.addIssue({ code: "custom", message: "Slug must be normalized.", path: ["slug"] });
    }

    if (value.canonical_url) {
      const normalized = normalizeCanonicalUrl(value.canonical_url);
      if (!isValidCanonicalUrl(normalized)) {
        ctx.addIssue({ code: "custom", message: "Canonical URL is invalid.", path: ["canonical_url"] });
      }
    }

    value.faq_content.forEach((item, index) => {
      const hasQuestion = !!item.question;
      const hasAnswer = !!item.answer;
      if (hasQuestion !== hasAnswer) {
        ctx.addIssue({
          code: "custom",
          message: "Each FAQ item must include both a question and an answer.",
          path: ["faq_content", index],
        });
      }
    });
  });

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1),
});

export const apiKeyCreateSchema = z.object({
  name: z.string().trim().min(1),
  expires_at: z.string().trim().optional().nullable(),
});

export function normalizeBlogPayload(input: Record<string, unknown>) {
  const payload = {
    ...input,
    slug: normalizeSlug(String(input.slug ?? "")),
    canonical_url: normalizeCanonicalUrl(String(input.canonical_url ?? "")) || null,
    seo_keywords: Array.isArray(input.seo_keywords)
      ? input.seo_keywords
      : parseKeywordList(String(input.seo_keywords ?? "")),
  };

  return blogPostInputSchema.parse(payload);
}
