'use client';

import { ReactNode, useState } from 'react';
import { Sidebar } from '@/components/admin/sidebar';
import { Header } from '@/components/admin/header';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-100/40 dark:bg-zinc-950">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(v => !v)} />
        <div className={cn("flex w-full flex-col overflow-hidden transition-all duration-300 ease-in-out", collapsed ? "md:pl-[68px]" : "md:pl-56")}>
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
}
