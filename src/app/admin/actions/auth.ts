'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { baseAPI } from '@/lib/api';

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  try {
    console.log(`[Next.js Server Action] Calling backend API via baseAPI for login: ${email}`);
    const user = await baseAPI.post('/login', { email, password });
    
    if (user.role !== 'Admin') {
      return { error: 'Access denied. Admin role required.' };
    }

    // Set actual user ID as token for now
    const cookieStore = await cookies();
    cookieStore.set('auth-token', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });
  } catch(e: any) {
    return { error: e.message || 'Invalid credentials or user is inactive' };
  }

  // Redirect to dashboard
  redirect('/admin/dashboard');
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('auth-token');
  redirect('/admin/login');
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;
  if (!token) return null;
  
  try {
    const user = await baseAPI.get(`/users/${token}`);
    return user || null;
  } catch (error) {
    return null;
  }
}
