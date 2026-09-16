'use client';

import { useState, useEffect, useRef, useCallback, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import {
  Bold, Italic, Underline, Link2, List, ListOrdered, Heading1, Heading2,
  Heading3, Image as ImageIcon, Quote, Eye, AlignLeft, AlignCenter, AlignRight,
  X, Plus, Save, Globe, FileText, Strikethrough, Code2, Minus, Loader2, CalendarDays
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { saveBlogPost } from '@/app/admin/actions/blog';
import { toast } from 'sonner';

import { MetadataItem } from '@/lib/metadata-store';
import { FAQItem } from '@/lib/blog-store';

interface BlogEditorProps {
  initialData?: {
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
    faqs?: FAQItem[];
    readTime?: number;
  };
  availableCategories: MetadataItem[];
  availableTags: MetadataItem[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

function toLocalDatetimeString(isoString: string) {
  if (!isoString) return '';
  const date = new Date(isoString);
  const tzoffset = date.getTimezoneOffset() * 60000;
  const localISOTime = (new Date(date.getTime() - tzoffset)).toISOString().slice(0, 16);
  return localISOTime;
}

export function BlogEditor({ initialData, availableCategories, availableTags }: BlogEditorProps) {
  const router = useRouter();
  const editorRef = useRef<HTMLDivElement>(null);
  const [isPending, startTransition] = useTransition();

  // Core fields
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [slugLocked, setSlugLocked] = useState(!!initialData);
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
  const [wordCount, setWordCount] = useState(0);
  const [lastSaved, setLastSaved] = useState<string | null>(initialData?.updatedAt || null);

  // Sidebar state
  const [sidebarTab, setSidebarTab] = useState<'general' | 'seo'>('general');
  const [categories, setCategories] = useState<string[]>(availableCategories.map(c => c.name));
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialData?.categories || []);
  const [newCategory, setNewCategory] = useState('');
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [tagInput, setTagInput] = useState('');
  const [featuredImage, setFeaturedImage] = useState<string | null>(initialData?.featuredImage || null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<'Draft' | 'Published'>(initialData?.status || 'Draft');
  const [createdAt, setCreatedAt] = useState(initialData?.createdAt || new Date().toISOString());
  const [isEditingDate, setIsEditingDate] = useState(false);

  const [seoTitle, setSeoTitle] = useState(initialData?.seoTitle || '');
  const [seoDescription, setSeoDescription] = useState(initialData?.seoDescription || '');
  const [faqs, setFaqs] = useState<FAQItem[]>(() => {
    if (!initialData?.faqs) return [];
    if (typeof initialData.faqs === 'string') {
      try {
        return JSON.parse(initialData.faqs);
      } catch {
        return [];
      }
    }
    if (Array.isArray(initialData.faqs)) {
      return initialData.faqs;
    }
    return [];
  });
  const [readTime, setReadTime] = useState<number>(initialData?.readTime ?? 2);

  // Load initial content into editor
  useEffect(() => {
    if (editorRef.current && initialData?.content) {
      editorRef.current.innerHTML = initialData.content;
      updateWordCount();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto slug
  useEffect(() => {
    if (!slugLocked) {
      setSlug(
        title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()
      );
    }
  }, [title, slugLocked]);

  const updateWordCount = useCallback(() => {
    if (editorRef.current) {
      const text = editorRef.current.innerText || '';
      setWordCount(text.trim().split(/\s+/).filter(Boolean).length);
    }
  }, []);

  const exec = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    updateWordCount();
  }, [updateWordCount]);

  const insertHTML = useCallback((html: string) => {
    editorRef.current?.focus();
    document.execCommand('insertHTML', false, html);
    updateWordCount();
  }, [updateWordCount]);

  const handleLink = () => {
    const url = window.prompt('Enter URL:', 'https://');
    if (url) exec('createLink', url);
  };

  const handleImageInsert = () => {
    const url = window.prompt('Image URL:', 'https://');
    if (url) insertHTML(`<img src="${url}" alt="image" />`);
  };

  // Save handler (for both Draft and Published)
  const handleSave = (targetStatus: 'Draft' | 'Published') => {
    const content = editorRef.current?.innerHTML || '';
    startTransition(async () => {
      const result = await saveBlogPost({
        id: initialData?.id,
        title,
        slug,
        content,
        seoTitle,
        seoDescription,
        categories: selectedCategories,
        tags,
        featuredImage,
        status: targetStatus,
        createdAt,
        faqs,
        readTime,
      });

      if (result.success) {
        toast.success(result.message);
        setStatus(targetStatus);
        setLastSaved(new Date().toISOString());
        // Redirect to edit page if new post
        if (!initialData?.id && result.post?.id) {
          router.push(`/admin/blogs/${result.post.id}/edit`);
        }
      } else {
        toast.error(result.message);
      }
    });
  };

  // Featured Image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFeaturedImage(reader.result as string);
        setUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // SERP values
  const displayTitle = seoTitle || title || 'Your Post Title';
  const displaySlug = slug || 'your-post-slug';
  const displayDesc = seoDescription || 'Write your meta description to preview it here. Aim for 150–160 characters for best SEO results.';

  type ToolbarBtn =
    | { icon: React.ElementType; label?: never; title: string; action: () => void }
    | { icon?: never; label: string; title: string; action: () => void };

  const toolbarGroups: ToolbarBtn[][] = [
    [
      { icon: Bold, title: 'Bold', action: () => exec('bold') },
      { icon: Italic, title: 'Italic', action: () => exec('italic') },
      { icon: Underline, title: 'Underline', action: () => exec('underline') },
      { icon: Strikethrough, title: 'Strikethrough', action: () => exec('strikeThrough') },
    ],
    [
      { icon: Heading1, title: 'Heading 1', action: () => exec('formatBlock', 'h1') },
      { icon: Heading2, title: 'Heading 2', action: () => exec('formatBlock', 'h2') },
      { icon: Heading3, title: 'Heading 3', action: () => exec('formatBlock', 'h3') },
      { label: 'H4', title: 'Heading 4', action: () => exec('formatBlock', 'h4') },
      { label: 'H5', title: 'Heading 5', action: () => exec('formatBlock', 'h5') },
      { label: 'H6', title: 'Heading 6', action: () => exec('formatBlock', 'h6') },
    ],
    [
      { icon: AlignLeft, title: 'Align Left', action: () => exec('justifyLeft') },
      { icon: AlignCenter, title: 'Align Center', action: () => exec('justifyCenter') },
      { icon: AlignRight, title: 'Align Right', action: () => exec('justifyRight') },
    ],
    [
      { icon: List, title: 'Bullet List', action: () => exec('insertUnorderedList') },
      { icon: ListOrdered, title: 'Numbered List', action: () => exec('insertOrderedList') },
      { icon: Quote, title: 'Blockquote', action: () => insertHTML('<blockquote style="border-left:4px solid #6366f1;padding-left:1rem;margin:1rem 0;color:#6b7280;font-style:italic;">Quote text here</blockquote>') },
      { icon: Code2, title: 'Code Block', action: () => insertHTML('<pre style="background:#1e1e2e;color:#cdd6f4;padding:1rem;border-radius:0.5rem;margin:1rem 0;overflow-x:auto;font-size:0.875rem;"><code>// your code here</code></pre>') },
    ],
    [
      { icon: Link2, title: 'Insert Link', action: handleLink },
      { icon: ImageIcon, title: 'Insert Image URL', action: handleImageInsert },
      { icon: Minus, title: 'Horizontal Rule', action: () => exec('insertHorizontalRule') },
    ],
  ];

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_320px] items-start">

      {/* ─── LEFT: Main Content ─── */}
      <div className="space-y-5">

        {/* Title + Slug Card */}
        <Card className="shadow-sm">
          <CardContent className="pt-5 pb-5 space-y-4">
            <Input
              placeholder="Post Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="border-0 border-b rounded-none px-0 text-2xl font-bold placeholder:text-zinc-300 dark:placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-b-indigo-500 shadow-none"
            />
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Permalink:</span>
              <span className="text-zinc-400 text-xs">/blog/</span>
              <input
                className="flex-1 bg-transparent text-xs font-mono text-zinc-700 dark:text-zinc-300 outline-none border-b border-dashed border-zinc-300 dark:border-zinc-600 pb-0.5"
                value={slug}
                onChange={e => { setSlug(e.target.value); setSlugLocked(true); }}
              />
              {slugLocked && (
                <button onClick={() => setSlugLocked(false)} className="text-[11px] text-indigo-500 hover:underline flex-shrink-0">
                  Edit
                </button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Rich Text Editor */}
        <Card className="shadow-sm">
          <CardHeader className="pb-0 pt-4 px-4">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              {/* Toolbar */}
              <div className="flex items-center gap-0.5 flex-wrap">
                {toolbarGroups.map((group, gi) => (
                  <span key={gi} className="flex items-center">
                    {group.map((btn) => (
                      <button
                        key={btn.title}
                        type="button"
                        title={btn.title}
                        onMouseDown={e => { e.preventDefault(); btn.action(); }}
                        className="h-8 w-8 flex items-center justify-center rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
                      >
                        {btn.icon
                          ? <btn.icon className="h-3.5 w-3.5" />
                          : <span className="text-[10px] font-bold leading-none">{btn.label}</span>
                        }
                      </button>
                    ))}
                    {gi < toolbarGroups.length - 1 && (
                      <span className="w-px h-5 bg-zinc-200 dark:bg-zinc-700 mx-1" />
                    )}
                  </span>
                ))}
              </div>

              {/* Write / Preview toggle */}
              <div className="flex border rounded-lg overflow-hidden text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('write')}
                  className={cn('px-3 py-1.5 flex items-center gap-1', activeTab === 'write' ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100')}
                >
                  <FileText className="h-3 w-3" /> Write
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={cn('px-3 py-1.5 flex items-center gap-1', activeTab === 'preview' ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100')}
                >
                  <Eye className="h-3 w-3" /> Preview
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div
              ref={editorRef}
              contentEditable={activeTab === 'write'}
              suppressContentEditableWarning
              onInput={updateWordCount}
              className={cn(
                'min-h-[420px] outline-none text-zinc-800 dark:text-zinc-200 leading-relaxed prose dark:prose-invert max-w-none',
                'border rounded-lg p-4',
                activeTab === 'write'
                  ? 'bg-white dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-indigo-200'
                  : 'bg-zinc-50 dark:bg-zinc-900 pointer-events-none'
              )}
              data-placeholder="Start writing your post content here..."
            />
            <div className="mt-2 flex items-center justify-between text-xs text-zinc-400">
              <span>{wordCount} words</span>
              {lastSaved && (
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-3 w-3" />
                  Last saved: {formatDate(lastSaved)}
                </span>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Google SERP Preview */}
        <Card className="shadow-sm overflow-hidden">
          <CardHeader className="py-3 px-5 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border-b">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-indigo-500" />
              <CardTitle className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Google Search Preview</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-5">
            <div className="font-sans max-w-lg space-y-1">
              <div className="flex items-center gap-1 text-xs text-zinc-500">
                <div className="w-4 h-4 bg-zinc-200 rounded-full" />
                <span>theicthub.com</span>
                <span className="mx-0.5">›</span><span>blog</span>
                <span className="mx-0.5">›</span>
                <span className="font-mono text-[11px] truncate max-w-[200px]">{displaySlug}</span>
              </div>
              <div className="text-[#1a0dab] dark:text-[#8ab4f8] text-lg hover:underline cursor-pointer leading-snug">
                {displayTitle}
              </div>
              <div className="text-[13px] text-[#4d5156] dark:text-[#bdc1c6] leading-snug line-clamp-2">
                {displayDesc}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="shadow-sm">
          <CardHeader className="py-3 px-5 bg-gradient-to-r from-zinc-50 to-indigo-50/20 dark:from-zinc-900/50 dark:to-zinc-900 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Frequently Asked Questions (FAQ)</CardTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setFaqs(prev => [...prev, { question: '', answer: '' }])}
              className="h-8 gap-1.5"
            >
              <Plus className="h-3.5 w-3.5" /> Add FAQ
            </Button>
          </CardHeader>
          <CardContent className="p-5 space-y-4">
            {faqs.length === 0 ? (
              <p className="text-sm text-zinc-400 text-center py-4">No FAQs added yet. Click "Add FAQ" to create one.</p>
            ) : (
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="relative p-4 border rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3 group/faq">
                    <button
                      type="button"
                      onClick={() => setFaqs(prev => prev.filter((_, i) => i !== idx))}
                      className="absolute top-3 right-3 p-1 text-zinc-400 hover:text-red-500 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold text-zinc-500">Question {idx + 1}</Label>
                      <Input
                        value={faq.question}
                        onChange={e => {
                          const updated = [...faqs];
                          updated[idx].question = e.target.value;
                          setFaqs(updated);
                        }}
                        placeholder="e.g., What is Next.js?"
                        className="bg-white dark:bg-zinc-950"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold text-zinc-500">Answer {idx + 1}</Label>
                      <Textarea
                        value={faq.answer}
                        onChange={e => {
                          const updated = [...faqs];
                          updated[idx].answer = e.target.value;
                          setFaqs(updated);
                        }}
                        placeholder="Type answer here..."
                        className="bg-white dark:bg-zinc-950 min-h-[80px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* ─── RIGHT: Sidebar ─── */}
      <div className="space-y-5">

        {/* Publish Box */}
        <Card className="shadow-sm">
          <CardHeader className="py-3 px-4 border-b bg-zinc-50 dark:bg-zinc-900">
            <CardTitle className="text-sm font-semibold">Publish</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500">Status:</span>
              <select
                value={status}
                onChange={e => setStatus(e.target.value as 'Draft' | 'Published')}
                className="bg-transparent text-zinc-800 dark:text-zinc-200 text-sm border rounded px-2 py-1 focus:ring-1 focus:ring-indigo-500"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500">Visibility:</span>
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">Public</span>
            </div>

            {/* Dates & Publish Time Edit (WordPress style) */}
            <div className="space-y-2 pt-2 border-t">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">Publish Date:</span>
                <button
                  type="button"
                  onClick={() => setIsEditingDate(!isEditingDate)}
                  className="text-xs text-indigo-600 hover:text-indigo-700 font-medium hover:underline flex items-center gap-1"
                >
                  <CalendarDays className="h-3 w-3" />
                  {isEditingDate ? 'Close' : 'Edit'}
                </button>
              </div>
              
              {isEditingDate ? (
                <Input
                  type="datetime-local"
                  value={toLocalDatetimeString(createdAt)}
                  onChange={e => {
                    if (e.target.value) {
                      setCreatedAt(new Date(e.target.value).toISOString());
                    }
                  }}
                  className="h-8 text-xs py-1 px-2 border-zinc-200 dark:border-zinc-800"
                />
              ) : (
                <div className="text-xs text-zinc-700 dark:text-zinc-300 font-medium bg-zinc-50 dark:bg-zinc-900/60 p-2 rounded border border-zinc-100 dark:border-zinc-800/40">
                  {formatDate(createdAt)}
                </div>
              )}
            </div>

            {lastSaved && (
              <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
                <span>Last Saved:</span>
                <span>{formatDate(lastSaved)}</span>
              </div>
            )}

            <div className="pt-2 flex flex-col gap-2">
              <Button
                className="w-full"
                variant="outline"
                size="sm"
                disabled={isPending}
                onClick={() => handleSave('Draft')}
              >
                {isPending ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                Save Draft
              </Button>
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                size="sm"
                disabled={isPending}
                onClick={() => handleSave('Published')}
              >
                {isPending ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                {status === 'Published' ? 'Update Post' : 'Publish Now'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs: General / SEO */}
        <Card className="shadow-sm">
          <div className="flex border-b">
            <button
              onClick={() => setSidebarTab('general')}
              className={cn('flex-1 py-2.5 text-sm font-medium transition-colors', sidebarTab === 'general' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-zinc-500 hover:text-zinc-700')}
            >
              General
            </button>
            <button
              onClick={() => setSidebarTab('seo')}
              className={cn('flex-1 py-2.5 text-sm font-medium transition-colors', sidebarTab === 'seo' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-zinc-500 hover:text-zinc-700')}
            >
              SEO
            </button>
          </div>

          <CardContent className="p-4 space-y-5">
            {sidebarTab === 'general' ? (
              <>
                {/* Featured Image */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Featured Image</Label>
                  {featuredImage ? (
                    <div className="relative group rounded-lg overflow-hidden border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={featuredImage} alt="Featured" className="w-full aspect-video object-cover" />
                      <button
                        onClick={() => setFeaturedImage(null)}
                        className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg aspect-video cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-colors">
                      <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                      <ImageIcon className="h-6 w-6 text-zinc-400 mb-2" />
                      <span className="text-xs font-medium text-zinc-500">
                        {uploading ? 'Uploading...' : 'Set Featured Image'}
                      </span>
                      <span className="text-[10px] text-zinc-400 mt-0.5">Click to upload</span>
                    </label>
                  )}
                </div>

                {/* Categories */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Categories</Label>
                  <div className="max-h-40 overflow-y-auto space-y-1.5 border rounded-lg p-3 bg-zinc-50 dark:bg-zinc-900">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() =>
                            setSelectedCategories(prev =>
                              prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
                            )
                          }
                          className="rounded h-4 w-4 text-indigo-600 border-zinc-300"
                        />
                        <span className="text-zinc-700 dark:text-zinc-300">{cat}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add new category..."
                      value={newCategory}
                      onChange={e => setNewCategory(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') {
                          const trimmed = newCategory.trim();
                          if (trimmed && !categories.includes(trimmed)) {
                            setCategories(prev => [...prev, trimmed]);
                            setSelectedCategories(prev => [...prev, trimmed]);
                          }
                          setNewCategory('');
                        }
                      }}
                      className="h-8 text-xs"
                    />
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => {
                        const trimmed = newCategory.trim();
                        if (trimmed && !categories.includes(trimmed)) {
                          setCategories(prev => [...prev, trimmed]);
                          setSelectedCategories(prev => [...prev, trimmed]);
                        }
                        setNewCategory('');
                      }}
                      className="h-8 w-8 p-0 flex-shrink-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Tags</Label>
                  <Input
                    placeholder="Add tags, press Enter or comma..."
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === 'Enter' || e.key === ',') {
                        e.preventDefault();
                        const newTag = tagInput.trim().replace(/,+$/, '');
                        if (newTag && !tags.includes(newTag)) setTags(prev => [...prev, newTag]);
                        setTagInput('');
                      }
                    }}
                    className="h-8 text-xs"
                  />
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs py-0.5 px-2 gap-1">
                          {tag}
                          <button type="button" onClick={() => setTags(prev => prev.filter(t => t !== tag))}>
                            <X className="h-3 w-3 text-zinc-400 hover:text-zinc-700" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                {/* Read Time */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Read Time (minutes)</Label>
                  <div className="flex items-center gap-2">
                    <input
                      id="readTime"
                      type="number"
                      min={1}
                      max={120}
                      value={readTime}
                      onChange={e => setReadTime(Math.max(1, Number(e.target.value)))}
                      className="flex h-9 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300"
                    />
                    <span className="text-xs text-zinc-400 shrink-0">min read</span>
                  </div>
                  <p className="text-[10px] text-zinc-400">Default is 2. Overrides the auto-calculated value.</p>
                </div>
              </>
            ) : (
              /* SEO Tab */
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="seo-title" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Meta Title</Label>
                  <Input
                    id="seo-title"
                    placeholder="Leave blank to use post title"
                    value={seoTitle}
                    onChange={e => setSeoTitle(e.target.value)}
                    className="text-sm"
                  />
                  <div className="flex justify-end">
                    <span className={cn('text-[10px]', seoTitle.length > 60 ? 'text-red-500' : 'text-zinc-400')}>
                      {seoTitle.length}/60
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="seo-desc" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Meta Description</Label>
                  <Textarea
                    id="seo-desc"
                    placeholder="Recommended: 150–160 characters"
                    value={seoDescription}
                    onChange={e => setSeoDescription(e.target.value)}
                    className="text-sm resize-none min-h-[100px]"
                  />
                  <div className="flex justify-end">
                    <span className={cn('text-[10px]', seoDescription.length > 160 ? 'text-red-500' : seoDescription.length > 140 ? 'text-amber-500' : 'text-zinc-400')}>
                      {seoDescription.length}/160
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Focus Keyword</Label>
                  <Input placeholder="e.g., Next.js blog tutorial" className="text-sm" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
