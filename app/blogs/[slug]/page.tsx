/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/app/components/blog/BlogCard";
import { FaqAccordion } from "@/app/components/FaqAccordion";
import { absoluteBlogUrl, formatBlogDate } from "@/lib/blog";
import { getPublishedPostBySlug, listPublishedPosts } from "@/lib/repo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Hive Automation",
    };
  }

  const canonical = absoluteBlogUrl(post.canonical_url || `/blogs/${post.slug}`);
  const title = post.meta_title || post.title;
  const description = post.meta_description || post.description;
  const ogTitle = post.og_title || title;
  const ogDescription = post.og_description || description;
  const ogImage = post.og_image || post.featured_image || "/hero-bg.png";
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: post.robots_index,
      follow: post.robots_follow,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: ogImage,
          alt: post.og_image_alt || post.featured_image_alt || post.title,
        },
      ],
      publishedTime: post.published_at || undefined,
      authors: post.authors.map((author) => author.name),
    },
    twitter: {
      card: "summary_large_image",
      title: post.twitter_title || ogTitle,
      description: post.twitter_description || ogDescription,
      images: [post.twitter_image || ogImage],
    },
    keywords: post.seo_keywords.length ? post.seo_keywords : undefined,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  let relatedPosts = await listPublishedPosts({
    limit: 3,
    category: post.category,
    excludeSlug: post.slug,
  });

  if (!relatedPosts.length) {
    relatedPosts = await listPublishedPosts({ limit: 3, excludeSlug: post.slug });
  }

  const publishedLabel = formatBlogDate(post.published_at);
  const canonical = absoluteBlogUrl(post.canonical_url || `/blogs/${post.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@type": post.schema_type,
    headline: post.title,
    description: post.description,
    image: post.og_image || post.featured_image || undefined,
    datePublished: post.published_at || undefined,
    dateModified: post.updated_at,
    articleSection: post.category,
    keywords: post.seo_keywords.join(", "),
    author: post.authors.map((author) => ({
      "@type": "Person",
      name: author.name,
      jobTitle: author.role || undefined,
      url: author.profile_url || undefined,
      description: author.bio || undefined,
    })),
    publisher: {
      "@type": "Organization",
      name: "Hive Automation",
      url: "https://hiveautomation.in",
      logo: {
        "@type": "ImageObject",
        url: "https://hiveautomation.in/logo.png",
      },
    },
    mainEntityOfPage: canonical,
  };

  return (
    <main className="blog-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="blog-detail-hero">
        <div className="container blog-detail-hero-inner">
          <div className="blog-detail-copy">
            <div className="blogs-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blogs">Blogs</Link>
              <span>/</span>
              <span>{post.title}</span>
            </div>

            <h1>{post.title}</h1>
            <p className="blog-detail-description">{post.description}</p>
          </div>
        </div>
      </section>

      <section className="section blog-detail-content-section">
        <div className="container">
          {post.featured_image ? (
            <div className="blog-detail-banner">
              <img
                src={post.featured_image}
                alt={post.featured_image_alt || post.title}
                className="blog-detail-banner-image"
              />
            </div>
          ) : null}
        </div>

        <div className="container blog-detail-layout">
          <aside className="blog-detail-sidebar">
            {post.authors.length ? (
              <div className="blog-side-card">
                <p className="section-label">Written By</p>
                <div className="blog-side-authors">
                  {post.authors.map((author) => (
                    <div className="blog-side-author" key={`${post.slug}-${author.name}`}>
                      <strong>{author.name}</strong>
                      {author.role ? <span>{author.role}</span> : null}
                      {author.bio ? <p>{author.bio}</p> : null}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="blog-side-card">
              <p className="section-label">Post Details</p>
              <ul className="blog-side-list">
                <li>
                  <strong>Category</strong>
                  <span>{post.category}</span>
                </li>
                {publishedLabel ? (
                  <li>
                    <strong>Published</strong>
                    <span>{publishedLabel}</span>
                  </li>
                ) : null}
                {post.reading_time ? (
                  <li>
                    <strong>Reading time</strong>
                    <span>{post.reading_time}</span>
                  </li>
                ) : null}
              </ul>
            </div>

            <Link className="blog-side-cta" href="/contact">
              <span>Need help with a similar automation challenge?</span>
              <ArrowUpRight size={16} />
            </Link>
          </aside>

          <article className="blog-detail-article">
            <div
              className="blog-rich-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.faq_content.length ? (
              <div className="blog-faq-block blog-faq-section">
                <p className="section-label">FAQ</p>
                <h2>Common questions</h2>
                <FaqAccordion
                  items={post.faq_content.map((faq) => ({
                    q: faq.question,
                    a: faq.answer,
                  }))}
                  className="about-faq-grid blog-faq-accordion"
                />
              </div>
            ) : null}
          </article>
        </div>
      </section>

      {relatedPosts.length ? (
        <section className="section blog-related-section">
          <div className="container">
            <div className="blogs-section-head">
              <div>
                <p className="section-label">More From The Blog</p>
              </div>
            </div>
            <div className="blogs-grid">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
