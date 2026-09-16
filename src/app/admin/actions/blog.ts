'use server';

import { baseAPI } from '@/lib/api';
import { revalidatePath } from 'next/cache';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
  categories: string[];
  tags: string[];
  featuredImage: string | null;
  status: 'Draft' | 'Published';
  author: string;
  createdAt: string;
  updatedAt: string;
  faqs?: FAQItem[];
  readTime?: number;
}

export interface BlogFormData {
  id?: string;
  title: string;
  slug: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
  categories: string[];
  tags: string[];
  featuredImage: string | null;
  status: 'Draft' | 'Published';
  createdAt?: string;
  faqs?: FAQItem[];
  readTime?: number;
}

export interface ActionResult {
  success: boolean;
  message: string;
  post?: BlogPost;
}

// Convert from snake_case backend format to frontend format
function mapBlogResponse(post: any): BlogPost {
  return {
    ...post,
    seoTitle: post.seo_title,
    seoDescription: post.seo_description,
    featuredImage: post.featured_image,
    readTime: post.read_time,
    createdAt: post.created_at,
    updatedAt: post.updated_at,
    categories: post.categories?.map((c: any) => c.name) || [],
    tags: post.tags?.map((t: any) => t.name) || [],
    faqs: post.faqs ? JSON.parse(post.faqs) : [],
    author: 'Admin', // Static for now
  };
}

export async function saveBlogPost(data: BlogFormData): Promise<ActionResult> {
  try {
    if (!data.title.trim()) return { success: false, message: 'Post title is required.' };
    if (!data.slug.trim()) return { success: false, message: 'Post slug is required.' };

    const payload = {
      title: data.title,
      slug: data.slug,
      content: data.content,
      seo_title: data.seoTitle || null,
      seo_description: data.seoDescription || null,
      featured_image: data.featuredImage || null,
      status: data.status,
      read_time: data.readTime || 2,
      faqs: data.faqs ? JSON.stringify(data.faqs) : null,
      categories: data.categories,
      tags: data.tags,
    };

    let post: any;
    if (data.id) {
      post = await baseAPI.put(`/blogs/${data.id}`, payload);
    } else {
      post = await baseAPI.post('/blogs', payload);
    }

    revalidatePath('/admin/blogs');
    revalidatePath(`/admin/blogs/${post.id}/edit`);
    revalidatePath(`/blog/${post.slug}`);

    return {
      success: true,
      message: data.status === 'Published'
        ? 'Post published successfully!'
        : 'Draft saved successfully!',
      post: mapBlogResponse(post),
    };
  } catch (error: any) {
    console.error('Save blog error:', error);
    return { success: false, message: error.message || 'An error occurred while saving the post.' };
  }
}

export async function deleteBlogPost(id: string): Promise<ActionResult> {
  try {
    await baseAPI.delete(`/blogs/${id}`);
    revalidatePath('/admin/blogs');
    return { success: true, message: 'Post deleted successfully.' };
  } catch (error: any) {
    console.error('Delete blog error:', error);
    return { success: false, message: error.message || 'An error occurred while deleting the post.' };
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const data = await baseAPI.get('/blogs');
    return data.map(mapBlogResponse);
  } catch (error) {
    console.error('Get all posts error:', error);
    return [];
  }
}

export async function cloneBlogPost(id: string): Promise<ActionResult> {
  try {
    const originalPostRaw = await baseAPI.get(`/blogs/${id}`);
    if (!originalPostRaw) return { success: false, message: 'Original post not found.' };

    const originalPost = mapBlogResponse(originalPostRaw);
    let newSlug = `${originalPost.slug}-copy`;
    
    const allPostsRaw = await baseAPI.get('/blogs');
    const allPosts = allPostsRaw.map(mapBlogResponse);
    
    let counter = 1;
    while (allPosts.some((p: any) => p.slug === newSlug)) {
      newSlug = `${originalPost.slug}-copy-${counter}`;
      counter++;
    }

    const cloned = await baseAPI.post('/blogs', {
      title: `${originalPost.title} (Copy)`,
      slug: newSlug,
      content: originalPost.content,
      seo_title: originalPost.seoTitle ? `${originalPost.seoTitle} (Copy)` : null,
      seo_description: originalPost.seoDescription || null,
      featured_image: originalPost.featuredImage || null,
      status: 'Draft',
      read_time: originalPost.readTime || 2,
      faqs: originalPost.faqs ? JSON.stringify(originalPost.faqs) : null,
      categories: originalPost.categories || [],
      tags: originalPost.tags || [],
    });

    revalidatePath('/admin/blogs');
    return { success: true, message: 'Post cloned successfully as Draft.', post: mapBlogResponse(cloned) };
  } catch (error: any) {
    console.error('Clone blog error:', error);
    return { success: false, message: error.message || 'An error occurred while cloning the post.' };
  }
}

export async function reorderBlogPosts(orderedIds: string[]): Promise<ActionResult> {
  return { success: false, message: 'Reordering is not supported in the SQLite API yet.' };
}

