'use server';

import { baseAPI } from '@/lib/api';
import { revalidatePath } from 'next/cache';

export async function markAsRead(id: string) {
  try {
    const inquiry = await baseAPI.get(`/inquiries/${id}`);
    if (inquiry) {
      await baseAPI.put(`/inquiries/${id}`, { ...inquiry, status: 'Read' });
    }
    revalidatePath('/admin/inquiries');
  } catch (error) {
    console.error('Mark as read error:', error);
  }
}

export async function deleteMessage(id: string) {
  try {
    await baseAPI.delete(`/inquiries/${id}`);
    revalidatePath('/admin/inquiries');
  } catch (error) {
    console.error('Delete inquiry error:', error);
  }
}
