import Link from "next/link";
import type { BlogPost } from "@/lib/cms-types";
import { BlogCard } from "@/app/components/blog/BlogCard";

export function HomeBlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="section home-blog-section" id="blog">
      <div className="container">
        <div className="home-blog-header mb-3">
          <div>
            <p className="section-label">Insights & Articles</p>
            <h2>Automation knowledge built from real project experience</h2>
            <p className="home-blog-intro">
              Practical articles on Siemens PLCs, SCADA, DCS, migration strategy, and
              industrial automation decisions that affect uptime in the field.
            </p>
          </div>
          <Link className="home-blog-all-link" href="/blogs">
            View all blogs
          </Link>
        </div>

        {posts.length ? (
          <div className="home-blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="blog-empty-state">
            <h3>Blog articles are on the way</h3>
            <p>
              The publishing system is ready. Once posts are published from the admin panel,
              they will appear here automatically.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
