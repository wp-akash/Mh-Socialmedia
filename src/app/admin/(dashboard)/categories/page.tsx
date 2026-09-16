import { baseAPI } from '@/lib/api';
import { MetadataManager } from '@/components/admin/metadata-manager';

export const metadata = {
  title: 'Categories | Admin Portal',
};

export default async function CategoriesPage() {
  const categories = await baseAPI.get('/categories').catch(() => []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Manage and organize your blog categories.</p>
        </div>
      </div>

      <MetadataManager initialItems={categories} type="category" />
    </div>
  );
}
