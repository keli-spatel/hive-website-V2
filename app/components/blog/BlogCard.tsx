/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/cms-types";
import { formatBlogDate } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const publishedLabel = formatBlogDate(post.published_at);

  return (
    <article className={`blog-card ${featured ? "blog-card-featured" : ""}`}>
      <Link className="blog-card-media-link" href={`/blogs/${post.slug}`}>
        {post.featured_image ? (
          <img
            src={post.featured_image}
            alt={post.featured_image_alt || post.title}
            className="blog-card-media"
            loading="lazy"
          />
        ) : (
          <div className="blog-card-media blog-card-media-fallback">
            <span>{post.category}</span>
          </div>
        )}
      </Link>

      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span className="blog-card-tag">{post.category}</span>
          {publishedLabel ? <span>{publishedLabel}</span> : null}
          {post.reading_time ? <span>{post.reading_time}</span> : null}
        </div>

        <div className="blog-card-copy">
          <h3>
            <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
          </h3>
          <p>{post.description}</p>
        </div>

        {post.authors.length ? (
          <div className="blog-card-authors">
            <span>By {post.authors.map((author) => author.name).join(", ")}</span>
          </div>
        ) : null}

        <Link className="blog-card-link" href={`/blogs/${post.slug}`}>
          <span>Read article</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
