'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  PenSquare,
  Settings,
  LogOut,
  ListTree,
  Tag,
  ChevronDown,
  MessageSquare,
  Users,
  UserPlus,
  UsersRound,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { logoutAction } from '@/app/admin/actions/auth';
import { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
  icon: any;
  exact?: boolean;
}

interface NavGroup {
  title: string;
  isExpandable?: boolean;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    title: 'Dashboards',
    items: [
      { name: 'Classic Dashboard', href: '/admin/dashboard', icon: LayoutDashboard, exact: true },
    ]
  },
  {
    title: 'Communications',
    items: [
      { name: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
    ]
  },
  {
    title: 'Content Management',
    isExpandable: true,
    items: [
      { name: 'All Posts', href: '/admin/blogs', icon: FileText, exact: true },
      { name: 'Create Post', href: '/admin/blogs/new', icon: PenSquare },
      { name: 'Categories', href: '/admin/categories', icon: ListTree },
      { name: 'Tags', href: '/admin/tags', icon: Tag },
    ]
  },
  {
    title: 'User Management',
    isExpandable: true,
    items: [
      { name: 'All Users', href: '/admin/users', icon: Users, exact: true },
      { name: 'Add User', href: '/admin/users/new', icon: UserPlus },
    ]
  },
  {
    title: 'Team',
    isExpandable: true,
    items: [
      { name: 'All Members', href: '/admin/employees', icon: UsersRound, exact: true },
      { name: 'Add Member', href: '/admin/employees/new', icon: UserPlus },
    ]
  },
  {
    title: 'Settings',
    items: [
      { name: 'General Settings', href: '/admin/settings', icon: Settings },
    ]
  }
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    'Content Management': true,
    'User Management': true
  });

  const toggleGroup = (title: string) => {
    setExpandedGroups(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div
      className={cn(
        'hidden md:flex flex-col border-r border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 flex-shrink-0 transition-all duration-300 ease-in-out fixed top-0 left-0 h-screen z-30',
        collapsed ? 'w-[68px]' : 'w-56'
      )}
    >
      {/* Collapse toggle button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-[52px] z-20 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 shadow-sm transition-colors"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed
          ? <ChevronRight className="h-3.5 w-3.5" />
          : <ChevronLeft className="h-3.5 w-3.5" />
        }
      </button>

      <div className="flex h-full max-h-screen flex-col gap-2">
        {/* Brand Header */}
        <div className="flex h-14 items-center border-b border-zinc-200/60 dark:border-zinc-800/60 px-3 lg:h-[60px]">
          <Link href="/admin/dashboard" className="flex items-center gap-2.5 overflow-hidden">
            {collapsed ? (
              /* Icon-only when collapsed */
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#d92d45] shadow-sm shadow-[#d92d45]/30">
                <LayoutDashboard className="h-4 w-4 text-white" />
              </div>
            ) : (
              /* Logo when expanded */
              <Image
                src="/Mhsocialmedia.jpg"
                alt="The ICT Hub"
                width={220}
                height={50}
                className="object-contain h-10 w-auto"
                priority
              />
            )}
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden py-4">
          <nav className="grid items-start px-2 text-[13px] font-medium space-y-5">
            {navGroups.map((group) => (
              <div key={group.title} className="space-y-1">
                {/* Group title — hide in collapsed mode */}
                {!collapsed && (
                  group.isExpandable ? (
                    <button
                      onClick={() => toggleGroup(group.title)}
                      className="flex w-full items-center justify-between px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                      {group.title}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", expandedGroups[group.title] ? "rotate-180" : "")} />
                    </button>
                  ) : (
                    <h4 className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      {group.title}
                    </h4>
                  )
                )}

                {/* Items — in collapsed mode always show all, expanded mode respect toggle */}
                {(collapsed || !group.isExpandable || expandedGroups[group.title]) && (
                  <div className="space-y-0.5 mt-1">
                    {group.items.map((item) => {
                      const isActive = item.exact
                        ? pathname === item.href
                        : pathname === item.href || pathname.startsWith(item.href + '/');
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          title={collapsed ? item.name : undefined}
                          className={cn(
                            "group flex items-center gap-3 rounded-md px-3 py-2 transition-all duration-200 relative",
                            collapsed && "justify-center px-0",
                            isActive
                              ? "bg-[#d92d45]/10 text-[#d92d45] dark:bg-[#d92d45]/15 font-semibold"
                              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900/50"
                          )}
                        >
                          {/* Active accent bar */}
                          {isActive && !collapsed && (
                            <span className="absolute left-0 top-1.5 bottom-1.5 w-0.75 rounded-r bg-[#d92d45]" />
                          )}
                          <item.icon className={cn("h-4 w-4 shrink-0 transition-colors", isActive ? "text-[#d92d45]" : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300")} />
                          {!collapsed && <span>{item.name}</span>}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer / Logout */}
        <div className="mt-auto p-3 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <form action={logoutAction}>
            <button
              type="submit"
              title={collapsed ? 'Logout' : undefined}
              className={cn(
                "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-500 hover:text-red-600 hover:bg-red-50/50 dark:text-zinc-400 dark:hover:text-red-400 dark:hover:bg-red-950/20 transition-all",
                collapsed && "justify-center px-0"
              )}
            >
              <LogOut className="h-4 w-4 shrink-0" />
              {!collapsed && <span>Logout</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
