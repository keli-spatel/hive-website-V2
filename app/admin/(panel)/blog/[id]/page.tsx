import { notFound } from "next/navigation";
import BlogEditorForm from "@/app/components/admin/BlogEditorForm";
import { getPostById } from "@/lib/repo";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditBlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) notFound();
  return <BlogEditorForm post={post as never} />;
}
