"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/lib/cms-types";
import { adminButtonClassName } from "./adminButton";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

export default function BlogListTable({ posts }: { posts: BlogPost[] }) {
  const router = useRouter();

  async function handleDelete(post: BlogPost) {
    const confirmed = window.confirm(
      `Delete "${post.title}"? It will be hidden from the CMS and public blog, but kept in the database for recovery.`,
    );
    if (!confirmed) return;
    const response = await fetch(`/api/admin/blog-posts/${post.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      router.refresh();
    }
  }

  if (!posts.length) {
    return <div className="border border-[#E2E9F3] bg-white p-5 text-sm text-[#686562]">No posts yet. Create your first article.</div>;
  }

  return (
    <div className="border border-[#E2E9F3] bg-white">
      <div className="hidden border-b border-[#E2E9F3] bg-[#F8FAFC] px-5 py-3 text-[12px] uppercase tracking-[0.16em] text-[#686562] md:grid md:grid-cols-[1fr_120px_150px_110px]">
        <span>Title</span>
        <span>Status</span>
        <span>Date</span>
        <span>Actions</span>
      </div>
      <div className="divide-y divide-[#E2E9F3]">
        {posts.map((post) => (
          <div key={post.id} className="grid gap-4 px-5 py-4 md:grid-cols-[1fr_120px_150px_110px] md:items-center">
            <div>
              <h2 className="text-[20px] font-medium leading-7 text-black">{post.title}</h2>
              <p className="mt-1 text-sm text-[#686562]">/{post.slug}</p>
            </div>
            <div>
              <span
                className={`inline-flex border px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] ${
                  post.is_published
                    ? "border-black bg-black text-white"
                    : "border-[#C5D3E8] bg-[#FFFDE6] text-black"
                }`}
              >
                {post.is_published ? "Published" : "Draft"}
              </span>
            </div>
            <div className="text-sm text-[#686562]">
              {post.published_at ? dateFormatter.format(new Date(post.published_at)) : "Draft"}
            </div>
            <div className="flex items-center gap-2">
              <Link
                aria-label={`Edit ${post.title}`}
                className={adminButtonClassName({ variant: "icon" })}
                href={`/admin/blog/${post.id}`}
                title="Edit"
              >
                <Pencil size={16} />
              </Link>
              <button
                aria-label={`Delete ${post.title}`}
                className={adminButtonClassName({ variant: "icon" })}
                onClick={() => handleDelete(post)}
                title="Delete"
                type="button"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
