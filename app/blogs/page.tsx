import Link from "next/link";
import { BlogCard } from "@/app/components/blog/BlogCard";
import { listPublishedCategories, listPublishedPosts } from "@/lib/repo";

export const revalidate = 300;

export default async function BlogsPage() {
  const [posts] = await Promise.all([
    listPublishedPosts(),
    listPublishedCategories(),
  ]);

  const [featuredPost, ...remainingPosts] = posts;

  return (
    <main className="blogs-page">
      <section className="blogs-hero">
        <div className="container blogs-hero-inner">
          <div className="blogs-hero-copy-wrap">
            <div className="blogs-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Blogs</span>
            </div>
            <h1>Blogs</h1>
            <p className="blogs-hero-copy">
              Articles from Hive Automation on PLC logic, SCADA and DCS implementation,
              retrofit planning, diagnostics, commissioning, and real industrial automation
              decisions.
            </p>
          </div>

        </div>
      </section>

      <section className="section blogs-list-section">
        <div className="container blogs-list-layout">
          {featuredPost ? (
            <div className="blogs-featured-wrap">
              <div className="blogs-section-head">
                <div>
                  <p className="section-label">Latest Article</p>
                </div>
              </div>
              <BlogCard post={featuredPost} featured />
            </div>
          ) : null}

          <div className="blogs-feed-wrap">
            {posts.length ? (
              <div className="blogs-grid">
                {remainingPosts.length
                  ? remainingPosts.map((post) => <BlogCard key={post.id} post={post} />)
                  : featuredPost
                    ? null
                    : posts.map((post) => <BlogCard key={post.id} post={post} />)}
              </div>
            ) : (
              <div className="blog-empty-state">
                <h3>No published blog posts yet</h3>
                <p>
                  The blog CMS is connected and ready. Publish a post from the admin panel and
                  it will appear here automatically.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
