'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, User, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { logoutAction } from '@/app/admin/actions/auth';
import React from 'react';

export function Header() {
  const pathname = usePathname();
  
  // Basic breadcrumb logic
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = paths.map((path, index) => {
    const href = '/' + paths.slice(0, index + 1).join('/');
    const isLast = index === paths.length - 1;
    const name = path.charAt(0).toUpperCase() + path.slice(1);
    return { name, href, isLast };
  });

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-zinc-50/40 dark:bg-zinc-900/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-0 w-72">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
              <LayoutDashboard className="h-5 w-5" />
              <span>Admin Portal</span>
            </Link>
          </div>
          <nav className="grid gap-2 p-4 text-sm font-medium">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 hover:text-zinc-900"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/posts"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 hover:text-zinc-900"
            >
              All Posts
            </Link>
            <Link
              href="/admin/posts/new"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 hover:text-zinc-900"
            >
              Create Post
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="w-full flex-1">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={crumb.href}>
                <BreadcrumbItem>
                  {crumb.isLast ? (
                    <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!crumb.isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <form action={logoutAction}>
            <button type="submit" className="w-full text-left">
              <DropdownMenuItem className="text-red-600 dark:text-red-400 focus:text-red-600 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
