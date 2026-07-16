"use client";

import Link from "next/link";
import { CheckCircle2, Plus, Trash2, Upload, XCircle } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "./RichTextEditor";
import { adminButtonClassName } from "./adminButton";
import { BlogFaqItem, BlogPost } from "@/lib/cms-types";
import { BLOG_CATEGORIES, estimateReadingTime, normalizeCanonicalUrl, parseAuthorLines } from "@/lib/blog";
import { normalizeSlug } from "@/lib/slug";

type Props = {
  post: BlogPost | null;
};

function buildAuthorsText(post: BlogPost | null) {
  if (!post?.authors?.length) return "Hive Automation | Team";
  return post.authors.map((author) => [author.name, author.role, author.avatar].filter(Boolean).join(" | ")).join("\n");
}

function ImageUrlUploadField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function uploadImage(file: File) {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/admin/blog-images", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        window.alert(data.message || "Could not upload image.");
        return;
      }
      onChange(data.data.url);
    } catch {
      window.alert("The CMS could not upload the image. Please try again.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="grid gap-2 text-sm">
      <span>{label}</span>
      <div className="flex gap-2">
        <input
          className="h-11 min-w-0 flex-1 border border-[#E2E9F3] px-3"
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <button
          className={adminButtonClassName({ variant: "secondary" }, "h-11 px-3")}
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          type="button"
        >
          <Upload size={16} />
          <span>{uploading ? "Uploading" : "Upload"}</span>
        </button>
        <input
          ref={inputRef}
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="sr-only"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void uploadImage(file);
          }}
          type="file"
        />
      </div>
    </div>
  );
}

export default function BlogEditorForm({ post }: Props) {
  const router = useRouter();
  const isNew = !post;
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(!isNew);
  const [description, setDescription] = useState(post?.description ?? "");
  const [tldr, setTldr] = useState(post?.tldr ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [faqContent, setFaqContent] = useState<BlogFaqItem[]>(
    post?.faq_content?.length ? post.faq_content : [],
  );
  const [metaTitle, setMetaTitle] = useState(post?.meta_title ?? "");
  const [metaDescription, setMetaDescription] = useState(post?.meta_description ?? "");
  const [focusKeyword, setFocusKeyword] = useState(post?.focus_keyword ?? "");
  const [seoKeywords, setSeoKeywords] = useState(post?.seo_keywords?.join(", ") ?? "");
  const [canonicalUrl, setCanonicalUrl] = useState(post?.canonical_url ?? "");
  const [featuredImageAlt, setFeaturedImageAlt] = useState(post?.featured_image_alt ?? "");
  const [ogTitle, setOgTitle] = useState(post?.og_title ?? "");
  const [ogDescription, setOgDescription] = useState(post?.og_description ?? "");
  const [ogImage, setOgImage] = useState(post?.og_image ?? "");
  const [ogImageAlt, setOgImageAlt] = useState(post?.og_image_alt ?? "");
  const [twitterTitle, setTwitterTitle] = useState(post?.twitter_title ?? "");
  const [twitterDescription, setTwitterDescription] = useState(post?.twitter_description ?? "");
  const [twitterImage, setTwitterImage] = useState(post?.twitter_image ?? "");
  const [twitterImageAlt, setTwitterImageAlt] = useState(post?.twitter_image_alt ?? "");
  const [published, setPublished] = useState(post?.is_published ?? false);
  const [robotsIndex, setRobotsIndex] = useState(post?.robots_index ?? true);
  const [robotsFollow, setRobotsFollow] = useState(post?.robots_follow ?? true);
  const [schemaType, setSchemaType] = useState<BlogPost["schema_type"]>(post?.schema_type ?? "BlogPosting");
  const [category, setCategory] = useState(post?.category ?? "Automation");
  const [publishDate, setPublishDate] = useState(
    post?.published_at ? post.published_at.slice(0, 16) : new Date().toISOString().slice(0, 16),
  );
  const [readingTime, setReadingTime] = useState(post?.reading_time ?? estimateReadingTime(post?.content ?? ""));
  const [readingTimeTouched, setReadingTimeTouched] = useState(Boolean(post?.reading_time));
  const [authorsText, setAuthorsText] = useState(buildAuthorsText(post));
  const [featuredImage, setFeaturedImage] = useState(post?.featured_image ?? "");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const imagePreview = featuredImage || ogImage || twitterImage;

  function updateTitle(nextTitle: string) {
    setTitle(nextTitle);
    if (isNew && !slugTouched) {
      setSlug(normalizeSlug(nextTitle));
    }
  }

  function updateContent(nextContent: string) {
    setContent(nextContent);
    if (!readingTimeTouched) {
      setReadingTime(estimateReadingTime(nextContent));
    }
  }

  async function savePost() {
    setPending(true);
    setError(null);
    setMessage(null);
    const payload = {
      title,
      slug: normalizeSlug(slug),
      description,
      tldr,
      authors: parseAuthorLines(authorsText),
      published_at: published ? new Date(publishDate).toISOString() : null,
      category,
      reading_time: readingTime,
      featured_image: featuredImage || null,
      content,
      faq_content: faqContent.filter((item) => item.question.trim() || item.answer.trim()),
      is_published: published,
      meta_title: metaTitle || null,
      meta_description: metaDescription || null,
      focus_keyword: focusKeyword || null,
      seo_keywords: seoKeywords.split(",").map((item) => item.trim()).filter(Boolean),
      canonical_url: normalizeCanonicalUrl(canonicalUrl) || null,
      featured_image_alt: featuredImageAlt || null,
      og_title: ogTitle || null,
      og_description: ogDescription || null,
      og_image: ogImage || null,
      og_image_alt: ogImageAlt || null,
      twitter_title: twitterTitle || null,
      twitter_description: twitterDescription || null,
      twitter_image: twitterImage || null,
      twitter_image_alt: twitterImageAlt || null,
      robots_index: robotsIndex,
      robots_follow: robotsFollow,
      schema_type: schemaType,
    };

    const url = isNew ? "/api/admin/blog-posts" : `/api/admin/blog-posts/${post.id}`;
    const method = isNew ? "POST" : "PATCH";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Could not save blog post.");
        return;
      }
      if (isNew) {
        router.push(`/admin/blog/${data.data.id}?saved=1`);
      } else {
        setMessage("Blog post saved successfully.");
        router.refresh();
      }
    } catch {
      setError("The CMS could not save the post. Please try again.");
    } finally {
      setPending(false);
    }
  }

  const titleMeta = useMemo(() => `${metaTitle.length}/70 characters. Keep it clear and concise.`, [metaTitle]);
  const descriptionMeta = useMemo(
    () => `${metaDescription.length}/170 characters. Use the primary outcome and keyword naturally.`,
    [metaDescription],
  );

  return (
    <div className="grid gap-6">
      <header className="border-b border-[#E2E9F3] pb-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Hive Automation CMS</p>
            <h1 className="mt-3 text-[34px] font-medium leading-[39px] text-black">{isNew ? "New blog post" : "Edit blog post"}</h1>
            {!isNew ? <p className="mt-2 text-sm text-[#686562]">{post.title}</p> : null}
          </div>
          <div className="flex gap-3">
            <Link className="text-sm text-black" href="/admin/blog">Back to posts</Link>
            {!isNew ? <Link className="text-sm text-black" href="/admin/blog/new">Create another post</Link> : null}
          </div>
        </div>
      </header>

      {message ? (
        <div className="flex items-center gap-2 border border-[#047857] bg-white px-4 py-3 text-sm text-[#047857]">
          <CheckCircle2 size={16} />
          <span>{message}</span>
        </div>
      ) : null}
      {error ? (
        <div className="flex items-center gap-2 border border-[#FF4500] bg-white px-4 py-3 text-sm text-[#CC3810]">
          <XCircle size={16} />
          <span>{error}</span>
        </div>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="grid gap-6">
          <section className="border border-[#E2E9F3] bg-white p-5">
            <h2 className="text-2xl font-medium text-black">Basic information</h2>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-sm">
                <span>Title</span>
                <input className="h-11 border border-[#E2E9F3] px-3" value={title} onChange={(e) => updateTitle(e.target.value)} />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Slug</span>
                <input className="h-11 border border-[#E2E9F3] px-3" value={slug} onChange={(e) => { setSlugTouched(true); setSlug(normalizeSlug(e.target.value)); }} />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Description</span>
                <textarea className="min-h-24 border border-[#E2E9F3] px-3 py-2" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
              </label>
              <label className="grid gap-2 text-sm">
                <span>TL;DR</span>
                <textarea className="min-h-28 border border-[#E2E9F3] px-3 py-2" rows={4} value={tldr} onChange={(e) => setTldr(e.target.value)} />
              </label>
            </div>
          </section>

          <section className="border border-[#E2E9F3] bg-white p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Post content</p>
            <div className="mt-4">
              <RichTextEditor value={content} onChange={updateContent} />
            </div>
          </section>

          <section className="border border-[#E2E9F3] bg-white p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Blog FAQ</p>
            <div className="mt-2 flex items-center justify-between">
              <h2 className="text-2xl font-medium text-black">FAQ items</h2>
              <button className={adminButtonClassName({ variant: "primary" })} onClick={() => setFaqContent([...faqContent, { question: "", answer: "" }])} type="button">
                <Plus size={16} />
                <span>Add FAQ</span>
              </button>
            </div>
            <div className="mt-4 grid gap-4">
              {!faqContent.length ? <div className="text-sm text-[#686562]">No FAQ items added.</div> : null}
              {faqContent.map((item, index) => (
                <div key={`${index}-${item.question}`} className="grid gap-3 border border-[#E2E9F3] bg-[#FCFCFC] p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">FAQ {index + 1}</p>
                    <button aria-label={`Remove FAQ ${index + 1}`} className={adminButtonClassName({ variant: "icon" })} onClick={() => setFaqContent(faqContent.filter((_, itemIndex) => itemIndex !== index))} title="Remove FAQ" type="button">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <label className="grid gap-2 text-sm">
                    <span>Question</span>
                    <input className="h-11 border border-[#E2E9F3] px-3" placeholder="What should readers know?" value={item.question} onChange={(e) => setFaqContent(faqContent.map((faq, faqIndex) => faqIndex === index ? { ...faq, question: e.target.value } : faq))} />
                  </label>
                  <label className="grid gap-2 text-sm">
                    <span>Answer</span>
                    <textarea className="min-h-24 border border-[#E2E9F3] px-3 py-2" placeholder="Give a concise, direct answer." rows={3} value={item.answer} onChange={(e) => setFaqContent(faqContent.map((faq, faqIndex) => faqIndex === index ? { ...faq, answer: e.target.value } : faq))} />
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section className="border border-[#E2E9F3] bg-white p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">SEO and GEO</p>
            <h2 className="mt-2 text-2xl font-medium text-black">Search preview fields</h2>
            <p className="mt-2 text-sm text-[#686562]">These fields control the title tag, meta description, canonical URL, social cards, image alt text, and AI-search context.</p>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-sm"><span>Meta title</span><input className="h-11 border border-[#E2E9F3] px-3" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value.slice(0, 70))} /><span className="text-xs text-[#686562]">{titleMeta}</span></label>
              <label className="grid gap-2 text-sm"><span>Focus keyword</span><input className="h-11 border border-[#E2E9F3] px-3" placeholder="AI workflow automation" value={focusKeyword} onChange={(e) => setFocusKeyword(e.target.value)} /></label>
              <label className="grid gap-2 text-sm"><span>Meta description</span><textarea className="min-h-24 border border-[#E2E9F3] px-3 py-2" rows={3} value={metaDescription} onChange={(e) => setMetaDescription(e.target.value.slice(0, 170))} /><span className="text-xs text-[#686562]">{descriptionMeta}</span></label>
              <label className="grid gap-2 text-sm"><span>SEO keywords</span><input className="h-11 border border-[#E2E9F3] px-3" value={seoKeywords} onChange={(e) => setSeoKeywords(e.target.value)} /><span className="text-xs text-[#686562]">Comma-separated. Used for metadata, schema, and AI context files.</span></label>
              <label className="grid gap-2 text-sm"><span>Canonical URL</span><input className="h-11 border border-[#E2E9F3] px-3" placeholder={`/blogs/${slug || "post-slug"}`} value={canonicalUrl} onBlur={() => setCanonicalUrl(normalizeCanonicalUrl(canonicalUrl))} onChange={(e) => setCanonicalUrl(e.target.value)} /></label>
              <label className="grid gap-2 text-sm"><span>Featured image alt text</span><input className="h-11 border border-[#E2E9F3] px-3" value={featuredImageAlt} onChange={(e) => setFeaturedImageAlt(e.target.value)} /></label>
            </div>
          </section>

          <section className="border border-[#E2E9F3] bg-white p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Social SEO</p>
            <h2 className="mt-2 text-2xl font-medium text-black">Open Graph and Twitter cards</h2>
            <div className="mt-5 grid gap-4">
              <input className="h-11 border border-[#E2E9F3] px-3" placeholder="Open Graph title" value={ogTitle} onChange={(e) => setOgTitle(e.target.value)} />
              <ImageUrlUploadField label="Open Graph image URL" placeholder="Open Graph image URL" value={ogImage} onChange={setOgImage} />
              <textarea className="min-h-20 border border-[#E2E9F3] px-3 py-2" rows={2} placeholder="Open Graph description" value={ogDescription} onChange={(e) => setOgDescription(e.target.value)} />
              <input className="h-11 border border-[#E2E9F3] px-3" placeholder="Open Graph image alt" value={ogImageAlt} onChange={(e) => setOgImageAlt(e.target.value)} />
              <input className="h-11 border border-[#E2E9F3] px-3" placeholder="Twitter title" value={twitterTitle} onChange={(e) => setTwitterTitle(e.target.value)} />
              <ImageUrlUploadField label="Twitter image URL" placeholder="Twitter image URL" value={twitterImage} onChange={setTwitterImage} />
              <textarea className="min-h-20 border border-[#E2E9F3] px-3 py-2" rows={2} placeholder="Twitter description" value={twitterDescription} onChange={(e) => setTwitterDescription(e.target.value)} />
              <input className="h-11 border border-[#E2E9F3] px-3" placeholder="Twitter image alt" value={twitterImageAlt} onChange={(e) => setTwitterImageAlt(e.target.value)} />
            </div>
          </section>
        </div>

        <div className="grid gap-6">
          <section className="border border-[#E2E9F3] bg-[#F8FAFC] p-5">
            <label className="flex items-start gap-3 text-sm"><input checked={published} onChange={(e) => setPublished(e.target.checked)} type="checkbox" /><span>Show on public blogs</span></label>
            <p className="mt-2 text-sm text-[#686562]">Draft posts are saved in the CMS but will not appear on /blogs until this is checked.</p>
            <div className="my-5 border-t border-[#E2E9F3]" />
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#686562]">Robots and schema</p>
            <div className="mt-4 grid gap-3 text-sm">
              <label className="flex items-start gap-3"><input checked={robotsIndex} onChange={(e) => setRobotsIndex(e.target.checked)} type="checkbox" /><span>Allow search indexing</span></label>
              <label className="flex items-start gap-3"><input checked={robotsFollow} onChange={(e) => setRobotsFollow(e.target.checked)} type="checkbox" /><span>Allow link following</span></label>
              <label className="grid gap-2"><span>Schema type</span><select className="h-11 border border-[#E2E9F3] bg-white px-3" value={schemaType} onChange={(e) => setSchemaType(e.target.value as BlogPost["schema_type"])}><option>BlogPosting</option><option>Article</option><option>TechArticle</option></select></label>
              <label className="grid gap-2"><span>Category</span><select className="h-11 border border-[#E2E9F3] bg-white px-3" value={category} onChange={(e) => setCategory(e.target.value)}>{BLOG_CATEGORIES.map((item) => <option key={item}>{item}</option>)}</select></label>
              <label className="grid gap-2"><span>Publish date</span><input className="h-11 border border-[#E2E9F3] bg-white px-3" type="datetime-local" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} /></label>
              <label className="grid gap-2"><span>Reading time</span><input className="h-11 border border-[#E2E9F3] bg-white px-3" value={readingTime} onChange={(e) => { setReadingTimeTouched(true); setReadingTime(e.target.value); }} /></label>
              <button className={adminButtonClassName({ variant: "primary", width: "full" }, "mt-2")} disabled={pending} onClick={savePost} type="button">{pending ? "Saving..." : "Save post"}</button>
            </div>
          </section>

          <section className="border border-[#E2E9F3] bg-white p-5">
            <h2 className="text-2xl font-medium text-black">Authors</h2>
            <label className="mt-4 grid gap-2 text-sm">
              <span>Authors</span>
              <textarea className="min-h-32 border border-[#E2E9F3] px-3 py-2" rows={5} value={authorsText} onChange={(e) => setAuthorsText(e.target.value)} />
              <span className="text-xs text-[#686562]">One author per line. Use: Name | Role | Avatar URL.</span>
            </label>
          </section>

          <section className="border border-[#E2E9F3] bg-white p-5">
            <h2 className="text-2xl font-medium text-black">Featured image panel</h2>
            <div className="mt-4">
              <ImageUrlUploadField label="Featured image URL" value={featuredImage} onChange={setFeaturedImage} />
            </div>
            {imagePreview ? (
              <div className="relative mt-4 aspect-video overflow-hidden border border-[#E2E9F3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={featuredImageAlt || title || ""}
                  className="h-full w-full object-cover"
                  src={imagePreview}
                />
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </div>
  );
}
