'use server';

import { baseAPI } from '@/lib/api';
import { revalidatePath } from 'next/cache';

export interface MetadataActionData {
  id?: string;
  name: string;
  slug: string;
}

export interface MetadataActionResult {
  success: boolean;
  message: string;
}

export async function manageCategory(action: 'add' | 'edit' | 'delete', data: MetadataActionData): Promise<MetadataActionResult> {
  try {
    if (action === 'add') {
      if (!data.name.trim() || !data.slug.trim()) return { success: false, message: 'Name and slug are required.' };
      await baseAPI.post('/categories', { name: data.name, slug: data.slug });
    } else if (action === 'edit') {
      return { success: false, message: 'Editing categories is not supported via baseAPI put yet.' };
    } else if (action === 'delete') {
      if (!data.id) return { success: false, message: 'ID is required to delete.' };
      await baseAPI.delete(`/categories/${data.id}`);
    }

    revalidatePath('/admin/categories');
    return { success: true, message: `Category ${action}ed successfully.` };
  } catch (error: any) {
    console.error(`Error in manageCategory (${action}):`, error);
    return { success: false, message: error.message || 'An error occurred while saving the category.' };
  }
}

export async function manageTag(action: 'add' | 'edit' | 'delete', data: MetadataActionData): Promise<MetadataActionResult> {
  try {
    if (action === 'add') {
      if (!data.name.trim() || !data.slug.trim()) return { success: false, message: 'Name and slug are required.' };
      await baseAPI.post('/tags', { name: data.name, slug: data.slug });
    } else if (action === 'edit') {
       return { success: false, message: 'Editing tags is not supported via baseAPI put yet.' };
    } else if (action === 'delete') {
      if (!data.id) return { success: false, message: 'ID is required to delete.' };
      await baseAPI.delete(`/tags/${data.id}`);
    }

    revalidatePath('/admin/tags');
    return { success: true, message: `Tag ${action}ed successfully.` };
  } catch (error: any) {
    console.error(`Error in manageTag (${action}):`, error);
    return { success: false, message: error.message || 'An error occurred while saving the tag.' };
  }
}
