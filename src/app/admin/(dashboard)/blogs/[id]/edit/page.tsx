import { BlogEditor } from '@/components/admin/blog-editor';
import { baseAPI } from '@/lib/api';
import { notFound } from 'next/navigation';

interface EditBlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: EditBlogPostPageProps) {
  const { id } = await params;
  const post = await baseAPI.get(`/blogs/${id}`).catch(() => null);
  return { title: post ? `Edit: ${post.title} | Admin Portal` : 'Edit Post | Admin Portal' };
}

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const { id } = await params;
  const post = await baseAPI.get(`/blogs/${id}`).catch(() => null);
  
  if (!post) notFound();

  const categories = await baseAPI.get('/categories').catch(() => []);
  const tags = await baseAPI.get('/tags').catch(() => []);

  const frontendPost = {
    ...post,
    seoTitle: post.seo_title,
    seoDescription: post.seo_description,
    featuredImage: post.featured_image,
    createdAt: post.created_at,
    updatedAt: post.updated_at
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Blog Post</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Modify the blog post content, customize meta details, and save your changes.
        </p>
      </div>
      <BlogEditor initialData={frontendPost} availableCategories={categories} availableTags={tags} />
    </div>
  );
}
