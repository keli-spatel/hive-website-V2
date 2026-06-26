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

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  description: string;
  tldr: string | null;
  authors: BlogAuthor[];
  published_at: string | null;
  category: string;
  reading_time: string | null;
  featured_image: string | null;
  content: string;
  faq_content: BlogFaqItem[];
  is_published: boolean;
  deleted_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  seo_keywords: string[];
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
  schema_type: "BlogPosting" | "Article" | "TechArticle";
  created_at: string;
  updated_at: string;
};

