'use server';

import { baseAPI } from '@/lib/api';
import { revalidatePath } from 'next/cache';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
  password?: string;
}

export interface UserFormData {
  id?: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
  password?: string;
}

export interface UserActionResult {
  success: boolean;
  message: string;
  user?: User;
}

export async function saveUserAction(data: UserFormData): Promise<UserActionResult> {
  try {
    if (!data.name.trim()) return { success: false, message: 'Name is required.' };
    if (!data.email.trim()) return { success: false, message: 'Email is required.' };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, message: 'Invalid email address.' };
    }

    let user: User;
    if (data.id) {
      // Update
      user = await baseAPI.put(`/users/${data.id}`, {
        name: data.name,
        email: data.email,
        role: data.role,
        status: data.status,
        password: data.password || undefined, // only send if provided
      });
    } else {
      // Create
      if (!data.password || !data.password.trim()) {
        return { success: false, message: 'Password is required for new users.' };
      }
      user = await baseAPI.post('/users', {
        name: data.name,
        email: data.email,
        role: data.role,
        status: data.status,
        password: data.password,
      });
    }

    revalidatePath('/admin/users');
    return {
      success: true,
      message: data.id ? 'User updated successfully!' : 'User created successfully!',
      user,
    };
  } catch (error: any) {
    console.error('Save user error:', error);
    return { success: false, message: error.message || 'An error occurred while saving the user.' };
  }
}

export async function deleteUserAction(id: string): Promise<UserActionResult> {
  try {
    await baseAPI.delete(`/users/${id}`);
    revalidatePath('/admin/users');
    return { success: true, message: 'User deleted successfully.' };
  } catch (error: any) {
    console.error('Delete user error:', error);
    return { success: false, message: error.message || 'An error occurred while deleting the user.' };
  }
}

export async function getAllUsersAction(): Promise<User[]> {
  try {
    return await baseAPI.get('/users');
  } catch (error) {
    console.error('Get all users error:', error);
    return [];
  }
}

export async function changeUserPasswordAction(id: string, newPassword: string): Promise<UserActionResult> {
  try {
    if (!newPassword || !newPassword.trim()) {
      return { success: false, message: 'New password is required.' };
    }
    
    // We fetch user first, or just use put
    const user = await baseAPI.get(`/users/${id}`);
    if (!user) return { success: false, message: 'User not found.' };

    await baseAPI.put(`/users/${id}`, {
      ...user,
      password: newPassword,
    });

    revalidatePath('/admin/users');
    return { success: true, message: 'User password changed successfully!' };
  } catch (error: any) {
    console.error('Change password error:', error);
    return { success: false, message: error.message || 'An error occurred while changing password.' };
  }
}
