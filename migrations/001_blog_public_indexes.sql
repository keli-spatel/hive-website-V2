CREATE INDEX IF NOT EXISTS idx_blog_posts_public_feed
  ON blog_posts(published_at DESC, updated_at DESC)
  WHERE is_published = TRUE AND deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_blog_posts_public_category_feed
  ON blog_posts(category, published_at DESC, updated_at DESC)
  WHERE is_published = TRUE AND deleted_at IS NULL;
