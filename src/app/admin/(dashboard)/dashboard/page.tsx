import Link from 'next/link';
import { getCurrentUser } from '@/app/admin/actions/auth';
import { baseAPI } from '@/lib/api';
import {
  FileText, Users, MessageSquare, TrendingUp,
  Eye, Edit, ArrowRight, CheckCircle, Clock, FolderOpen
} from 'lucide-react';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Build monthly post counts for the past 6 months from real data
function buildMonthlyChart(posts: any[]) {
  const now = new Date();
  const months: { label: string; count: number }[] = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const label = d.toLocaleString('default', { month: 'short' });
    const count = posts.filter((p: any) => {
      const pd = new Date(p.createdAt);
      return pd.getFullYear() === d.getFullYear() && pd.getMonth() === d.getMonth();
    }).length;
    months.push({ label, count });
  }
  return months;
}

// Category breakdown
function buildCategoryBreakdown(posts: any[]) {
  const map: Record<string, number> = {};
  posts.forEach((p: any) => p.categories?.forEach((c: string) => { map[c] = (map[c] || 0) + 1; }));
  return Object.entries(map)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

export default async function DashboardPage() {
  const allPostsRaw = await baseAPI.get('/blogs').catch(() => []);
  const allPosts = allPostsRaw.map((p: any) => ({ ...p, createdAt: p.created_at }));
  const allUsers = await baseAPI.get('/users').catch(() => []);
  const inquiries = await baseAPI.get('/inquiries').catch(() => []);
  const categories = await baseAPI.get('/categories').catch(() => []);
  const currentUser = await getCurrentUser();

  // Real counts
  const totalPosts = allPosts.length;
  const publishedPosts = allPosts.filter((p: any) => p.status === 'Published').length;
  const draftPosts = allPosts.filter((p: any) => p.status === 'Draft').length;
  const totalUsers = allUsers.length;
  const totalInquiries = inquiries.length;
  const unreadInquiries = inquiries.filter((i: any) => i.status === 'New').length;

  // Recent 5 posts
  const recentPosts = [...allPosts].slice(0, 5);

  // Chart data
  const monthlyData = buildMonthlyChart(allPosts);
  const chartMax = Math.max(...monthlyData.map(m => m.count), 1);
  const categoryData = buildCategoryBreakdown(allPosts);
  const catTotal = categoryData.reduce((s, c) => s + c.count, 0) || 1;

  // Published ratio
  const publishedPct = totalPosts ? Math.round((publishedPosts / totalPosts) * 100) : 0;

  const statCards = [
    {
      label: 'Total Posts',
      value: totalPosts,
      sub: `${publishedPosts} published · ${draftPosts} draft`,
      icon: FileText,
      color: 'text-[#d92d45]',
      bg: 'bg-[#d92d45]/10',
      border: 'border-[#d92d45]/20',
    },
    {
      label: 'Total Users',
      value: totalUsers,
      sub: `${allUsers.filter((u: any) => u.role === 'Admin').length} admin · ${allUsers.filter((u: any) => u.role !== 'Admin').length} viewer`,
      icon: Users,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
    },
    {
      label: 'Inquiries',
      value: totalInquiries,
      sub: unreadInquiries > 0 ? `${unreadInquiries} unread` : 'All read',
      icon: MessageSquare,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
    },
    {
      label: 'Categories',
      value: categories.length,
      sub: `Across ${totalPosts} posts`,
      icon: FolderOpen,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
    },
  ];

  return (
    <div className="space-y-1 animate-in fade-in slide-in-from-bottom-1 duration-500">
      {/* ── Page Header ── */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        {/* <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Dashboard Overview</h1>
          <p className="text-sm text-zinc-500 mt-1">Live data from your content, users, and inquiries.</p>
        </div> */}
        {/* <Link
          href="/admin/blogs/new"
          className="flex items-center gap-2 px-4 py-2 bg-[#d92d45] hover:bg-[#b02235] text-white text-sm font-semibold rounded-xl shadow-sm shadow-[#d92d45]/25 transition-all"
        >
          + New Post
        </Link> */}
      </div>

      {/* ── Welcome Banner ── */}
      {currentUser && (
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Welcome back, {currentUser.name}!</h2>
            <p className="text-sm text-zinc-500 mt-1">{currentUser.email}</p>
          </div>
          <div className="bg-[#d92d45]/10 text-[#d92d45] px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            Role: {currentUser.role}
          </div>
        </div>
      )}

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map(({ label, value, sub, icon: Icon, color, bg, border }) => (
          <div
            key={label}
            className={`bg-white dark:bg-zinc-950 border ${border} dark:border-zinc-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{label}</p>
              <div className={`${bg} p-2 rounded-lg`}>
                <Icon className={`h-4 w-4 ${color}`} />
              </div>
            </div>
            <p className={`text-3xl font-extrabold ${color}`}>{value}</p>
            <p className="text-xs text-zinc-400 mt-1">{sub}</p>
          </div>
        ))}
      </div>

      {/* ── Charts Row ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Bar Chart: Posts per month */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">Posts Published</h2>
              <p className="text-xs text-zinc-400 mt-0.5">Last 6 months</p>
            </div>
            <TrendingUp className="h-4 w-4 text-[#d92d45]" />
          </div>
          <div className="flex items-end justify-between gap-2 h-36">
            {monthlyData.map(({ label, count }) => {
              const heightPct = chartMax > 0 ? Math.max((count / chartMax) * 100, count > 0 ? 8 : 0) : 0;
              return (
                <div key={label} className="flex-1 flex flex-col items-center gap-1.5 group">
                  <span className="text-[10px] font-semibold text-zinc-400 group-hover:text-[#d92d45] transition-colors">
                    {count > 0 ? count : ''}
                  </span>
                  <div className="w-full rounded-t-md bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden" style={{ height: '100px' }}>
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-[#d92d45] rounded-t-md transition-all duration-700 group-hover:bg-[#b02235]"
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-medium">{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Published vs Draft progress */}
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm space-y-6">
          <div>
            <h2 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">Post Status</h2>
            <p className="text-xs text-zinc-400 mt-0.5">Published vs Drafts</p>
          </div>

          {/* Donut-style ring */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-28 h-28">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f1f5f9" strokeWidth="3.8" />
                <circle
                  cx="18" cy="18" r="15.9" fill="none"
                  stroke="#d92d45" strokeWidth="3.8"
                  strokeDasharray={`${publishedPct} ${100 - publishedPct}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{publishedPct}%</span>
                <span className="text-[10px] text-zinc-400">Published</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
                <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-emerald-500" />Published</span>
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">{publishedPosts}</span>
              </div>
              <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5">
                <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-700" style={{ width: `${publishedPct}%` }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-amber-500" />Drafts</span>
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">{draftPosts}</span>
              </div>
              <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5">
                <div className="bg-amber-500 h-1.5 rounded-full transition-all duration-700" style={{ width: `${100 - publishedPct}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Row ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Posts */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
            <h2 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">Recent Posts</h2>
            <Link href="/admin/blogs" className="flex items-center gap-1 text-xs text-[#d92d45] hover:underline font-medium">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {recentPosts.length === 0 ? (
              <p className="px-6 py-8 text-center text-sm text-zinc-400">No posts yet.</p>
            ) : recentPosts.map((post: any) => (
              <div key={post.id} className="flex items-center gap-4 px-6 py-3.5 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 group transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate group-hover:text-[#d92d45] transition-colors">
                    {post.title}
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">{formatDate(post.createdAt)}</p>
                </div>
                <span className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${post.status === 'Published'
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                    : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>
                  {post.status}
                </span>
                <Link
                  href={`/admin/blogs/${post.id}/edit`}
                  className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Edit className="h-3.5 w-3.5 text-zinc-400" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm space-y-4">
          <div>
            <h2 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">Top Categories</h2>
            <p className="text-xs text-zinc-400 mt-0.5">By post count</p>
          </div>

          {categoryData.length === 0 ? (
            <p className="text-sm text-zinc-400 text-center py-6">No categories yet.</p>
          ) : (
            <div className="space-y-3">
              {categoryData.map(({ name, count }, i) => {
                const pct = Math.round((count / catTotal) * 100);
                const colors = [
                  'bg-[#d92d45]', 'bg-indigo-500', 'bg-emerald-500', 'bg-amber-500', 'bg-violet-500'
                ];
                return (
                  <div key={name}>
                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
                      <span>{count} post{count !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2">
                      <div
                        className={`${colors[i % colors.length]} h-2 rounded-full transition-all duration-700`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
            <Link href="/admin/categories" className="flex items-center gap-1 text-xs text-[#d92d45] hover:underline font-medium">
              Manage categories <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
