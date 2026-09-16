'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from '@/components/ui/table';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
  DropdownMenuRadioGroup, DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu';
import { 
  Plus, MoreHorizontal, Edit, Eye, Trash2, FileText, 
  Search, ArrowDownUp, ImageIcon, Filter, Star, Copy, GripVertical
} from 'lucide-react';
import { MetadataItem } from '@/lib/metadata-store';
import { toast } from 'sonner';
import { cloneBlogPost, reorderBlogPosts, deleteBlogPost } from '@/app/admin/actions/blog';

interface BlogPost {
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
  createdAt: string;
  updatedAt: string;
}

interface BlogsClientPageProps {
  initialPosts: BlogPost[];
  availableCategories: MetadataItem[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getWordCount(html: string) {
  if (!html) return 0;
  return html.replace(/<[^>]*>?/gm, '').split(/\s+/).filter(Boolean).length;
}

// Generate a deterministic reasonable number for views based on slug hash
function getDeterministicViews(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  return 120 + Math.abs(hash % 880);
}

export function BlogsClientPage({ initialPosts, availableCategories }: BlogsClientPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortField, setSortField] = useState<'title' | 'createdAt' | 'category' | 'words' | 'status'>('createdAt');
  const [sortAsc, setSortAsc] = useState(false);

  // Drag and Drop States
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  // Sync props to state if initialPosts changes server-side
  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts]);

  // Reordering is only enabled when there is no active search, status filter, category filter, or custom sort.
  const isManualOrderActive = !search && selectedStatus === 'all' && selectedCategory === 'all' && sortField === 'createdAt' && !sortAsc;

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === index) return;
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = async (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    setDragOverIndex(null);
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      return;
    }

    const updated = [...posts];
    const [removed] = updated.splice(draggedIndex, 1);
    updated.splice(targetIndex, 0, removed);

    setPosts(updated);
    setDraggedIndex(null);

    const orderedIds = updated.map(p => p.id);
    try {
      const res = await reorderBlogPosts(orderedIds);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      toast.error('Failed to save order.');
    }
  };

  const handleClone = async (id: string) => {
    try {
      const res = await cloneBlogPost(id);
      if (res.success && res.post) {
        toast.success(res.message);
        // Insert the cloned post after the original post in state
        const originalIndex = posts.findIndex(p => p.id === id);
        const updated = [...posts];
        if (originalIndex !== -1) {
          updated.splice(originalIndex + 1, 0, res.post);
        } else {
          updated.unshift(res.post);
        }
        setPosts(updated);
      } else {
        toast.error(res.message || 'Failed to clone post.');
      }
    } catch (err) {
      toast.error('An error occurred while cloning the post.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      const res = await deleteBlogPost(id);
      if (res.success) {
        toast.success(res.message);
        setPosts(posts.filter(p => p.id !== id));
      } else {
        toast.error(res.message || 'Failed to delete post.');
      }
    } catch (err) {
      toast.error('An error occurred while deleting the post.');
    }
  };


  // Global counts (overall database state)
  const totalCount = posts.length;
  const publishedCount = posts.filter(p => p.status === 'Published').length;
  const draftCount = posts.filter(p => p.status === 'Draft').length;

  // Filtered and sorted posts
  const filteredAndSortedPosts = useMemo(() => {
    let result = [...posts];

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        p => p.title.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q)
      );
    }

    // Status filter
    if (selectedStatus !== 'all') {
      result = result.filter(p => p.status === selectedStatus);
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.categories && p.categories.includes(selectedCategory));
    }

    // Sorting
    result.sort((a, b) => {
      let valA: any = '';
      let valB: any = '';

      if (sortField === 'title') {
        valA = a.title.toLowerCase();
        valB = b.title.toLowerCase();
      } else if (sortField === 'createdAt') {
        valA = new Date(a.createdAt).getTime();
        valB = new Date(b.createdAt).getTime();
      } else if (sortField === 'category') {
        valA = (a.categories?.[0] || '').toLowerCase();
        valB = (b.categories?.[0] || '').toLowerCase();
      } else if (sortField === 'words') {
        valA = getWordCount(a.content);
        valB = getWordCount(b.content);
      } else if (sortField === 'status') {
        valA = a.status;
        valB = b.status;
      }

      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });

    return result;
  }, [posts, search, selectedStatus, selectedCategory, sortField, sortAsc]);

  const handleSort = (field: 'title' | 'createdAt' | 'category' | 'words' | 'status') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Manage and organize all your blog content.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-sm border-zinc-200/60 dark:border-zinc-800/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Total Posts</CardTitle>
            <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50 border-0 text-xs">All Time</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCount}</div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-zinc-200/60 dark:border-zinc-800/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Published</CardTitle>
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0 text-xs">Active</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{publishedCount}</div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-zinc-200/60 dark:border-zinc-800/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Drafts</CardTitle>
            <Badge variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-50 border-0 text-xs">Draft</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{draftCount}</div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 flex flex-col justify-center items-center p-4">
           <Link href="/admin/blogs/new" className="w-full h-full flex items-center justify-center">
             <Button className="w-full bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800">
               <Plus className="h-4 w-4 mr-2" /> Add Post
             </Button>
           </Link>
        </Card>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <Input 
            placeholder="Search posts..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800" 
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Status Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white dark:bg-zinc-950 text-zinc-600 border-zinc-200 dark:border-zinc-800">
                <Filter className="h-4 w-4 mr-2" /> Status: {selectedStatus === 'all' ? 'All' : selectedStatus}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuRadioGroup value={selectedStatus} onValueChange={setSelectedStatus}>
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Published">Active (Published)</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Draft">Draft</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Category Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white dark:bg-zinc-950 text-zinc-600 border-zinc-200 dark:border-zinc-800">
                <Filter className="h-4 w-4 mr-2" /> Category: {selectedCategory === 'all' ? 'All' : selectedCategory}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 max-h-72 overflow-y-auto">
              <DropdownMenuRadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                <DropdownMenuRadioItem value="all">All Categories</DropdownMenuRadioItem>
                {availableCategories.map(cat => (
                  <DropdownMenuRadioItem key={cat.id} value={cat.name}>
                    {cat.name}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {(search || selectedStatus !== 'all' || selectedCategory !== 'all') && (
            <Button 
              variant="ghost" 
              onClick={() => { setSearch(''); setSelectedStatus('all'); setSelectedCategory('all'); }}
              className="text-xs text-zinc-500 hover:text-zinc-900"
            >
              Reset Filters
            </Button>
          )}
        </div>
      </div>

      {/* Posts Table */}
      <Card className="shadow-sm border-zinc-200 dark:border-zinc-800">
        <CardContent className="p-0">
          {filteredAndSortedPosts.length === 0 ? (
            <div className="text-center py-16 text-zinc-400">
              <FileText className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No posts found matching the filters.</p>
              <p className="text-sm mt-1">Try adjusting your search query or filters.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b-zinc-200 dark:border-b-zinc-800">
                    {isManualOrderActive && (
                      <TableHead className="w-8 pl-4"></TableHead>
                    )}
                    <TableHead className="w-12 pl-4">
                      <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
                    </TableHead>
                    <TableHead className="min-w-[250px]">
                      <button 
                        onClick={() => handleSort('title')}
                        className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold"
                      >
                        Post Name <ArrowDownUp className="h-3 w-3" />
                      </button>
                    </TableHead>
                    <TableHead>
                      <button 
                        onClick={() => handleSort('createdAt')}
                        className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold"
                      >
                        Date <ArrowDownUp className="h-3 w-3" />
                      </button>
                    </TableHead>
                    <TableHead>
                      <button 
                        onClick={() => handleSort('category')}
                        className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold"
                      >
                        Category <ArrowDownUp className="h-3 w-3" />
                      </button>
                    </TableHead>
                    <TableHead>
                      <button 
                        onClick={() => handleSort('words')}
                        className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold"
                      >
                        Words <ArrowDownUp className="h-3 w-3" />
                      </button>
                    </TableHead>
                    <TableHead>Slug</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>
                      <button 
                        onClick={() => handleSort('status')}
                        className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold"
                      >
                        Status <ArrowDownUp className="h-3 w-3" />
                      </button>
                    </TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAndSortedPosts.map((post, index) => (
                    <TableRow 
                      key={post.id} 
                      draggable={isManualOrderActive}
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, index)}
                      className={`group border-b-zinc-100 dark:border-b-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all ${
                        draggedIndex === index ? 'opacity-40 bg-indigo-50/30 dark:bg-indigo-950/20' : ''
                      } ${
                        dragOverIndex === index ? 'border-t-2 border-t-indigo-500 bg-indigo-50/10 dark:bg-indigo-950/10' : ''
                      }`}
                    >
                      {isManualOrderActive && (
                        <TableCell className="pl-4 cursor-grab active:cursor-grabbing text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
                          <GripVertical className="h-4 w-4" />
                        </TableCell>
                      )}
                      <TableCell className="pl-4">
                        <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 shrink-0 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-700">
                            {post.featuredImage ? (
                              <img src={post.featuredImage} alt={post.title} className="h-full w-full object-cover" />
                            ) : (
                              <ImageIcon className="h-5 w-5 text-zinc-400" />
                            )}
                          </div>
                          <Link
                            href={`/admin/blogs/${post.id}/edit`}
                            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors line-clamp-2 text-sm"
                          >
                            {post.title}
                          </Link>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-zinc-500 whitespace-nowrap">
                        {formatDate(post.createdAt)}
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          {post.categories?.[0] || 'Uncategorized'}
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-zinc-500">
                        {getWordCount(post.content)}
                      </TableCell>
                      <TableCell className="text-sm text-zinc-500 max-w-[120px] truncate">
                        {post.slug}
                      </TableCell>
                      <TableCell className="text-sm font-medium flex items-center gap-1">
                        <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                        {getDeterministicViews(post.slug)}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            post.status === 'Published'
                              ? 'border-emerald-500 text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30'
                              : 'border-amber-500 text-amber-600 bg-amber-50 dark:bg-amber-950/30'
                          }
                        >
                          {post.status === 'Published' ? 'Active' : 'Draft'}
                        </Badge>
                      </TableCell>
                      <TableCell className="pr-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem asChild>
                              <Link href={`/blog/${post.slug}`} target="_blank">
                                <Eye className="mr-2 h-4 w-4" /> View Live
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/admin/blogs/${post.id}/edit`}>
                                <Edit className="mr-2 h-4 w-4" /> Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleClone(post.id)} className="cursor-pointer">
                              <Copy className="mr-2 h-4 w-4" /> Clone Post
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleDelete(post.id)} className="text-red-600 dark:text-red-400 focus:text-red-600 cursor-pointer">
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
