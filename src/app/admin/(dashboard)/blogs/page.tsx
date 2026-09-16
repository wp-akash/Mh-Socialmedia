import { baseAPI } from '@/lib/api';
import { BlogsClientPage } from '@/components/admin/blogs-client-page';

export const metadata = {
  title: 'All Blog Posts | Admin Portal',
};

export default async function AllBlogsPage() {
  const postsRaw = await baseAPI.get('/blogs').catch(() => []);
  const categories = await baseAPI.get('/categories').catch(() => []);

  // Typecast or map just to be sure properties match BlogPost interface
  const mappedPosts = postsRaw.map((post: any) => ({
    id: post.id || '',
    title: post.title || '',
    slug: post.slug || '',
    content: post.content || '',
    seoTitle: post.seo_title || '',
    seoDescription: post.seo_description || '',
    categories: post.categories || [],
    tags: post.tags || [],
    featuredImage: post.featured_image || null,
    status: (post.status === 'Published' || post.status === 'Draft') ? post.status : 'Draft',
    createdAt: post.created_at || new Date().toISOString(),
    updatedAt: post.updated_at || new Date().toISOString(),
  }));

  return (
    <BlogsClientPage 
      initialPosts={mappedPosts} 
      availableCategories={categories} 
    />
  );
}
