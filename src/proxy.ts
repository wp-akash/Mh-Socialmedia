import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Check if the user is accessing the admin area (except login)
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    const authCookie = request.cookies.get('auth-token');

    // If no auth cookie, redirect to login
    if (!authCookie) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/admin/login';
      return NextResponse.redirect(loginUrl);
    }
  }

  // If accessing login page while already authenticated, redirect to dashboard
  if (request.nextUrl.pathname.startsWith('/admin/login')) {
    const authCookie = request.cookies.get('auth-token');
    if (authCookie) {
      const dashboardUrl = request.nextUrl.clone();
      dashboardUrl.pathname = '/admin/dashboard';
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
