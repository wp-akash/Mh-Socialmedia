import { BlogEditor } from '@/components/admin/blog-editor';
import { baseAPI } from '@/lib/api';

export const metadata = {
  title: 'Create New Post | Admin Portal',
};

export default async function NewBlogPostPage() {
  const categories = await baseAPI.get('/categories').catch(() => []);
  const tags = await baseAPI.get('/tags').catch(() => []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Blog Post</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Draft a new blog post for the website, customize SEO details, and publish.
        </p>
      </div>
      <BlogEditor availableCategories={categories} availableTags={tags} />
    </div>
  );
}
