import fs from 'fs';
import path from 'path';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
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
  author: string;
  createdAt: string;
  updatedAt: string;
  faqs?: FAQItem[];
  readTime?: number;
}

// Store file lives in the project root so it persists across restarts
const DB_PATH = path.join(process.cwd(), 'data', 'blogs.json');

function ensureDB() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    const seed: BlogPost[] = [
      {
        id: '1',
        title: 'The Future of Web Development with Next.js 15',
        slug: 'future-of-web-development-nextjs-15',
        content: '<h2>Introduction</h2><p>Next.js 15 brings many features to the table including React 19 support, Server Actions updates, and improved caching.</p>',
        seoTitle: 'Next.js 15: The Future of Web Development',
        seoDescription: 'Discover the latest updates in Next.js 15 for advanced web developers.',
        categories: ['Technology', 'Next.js'],
        tags: ['React', 'Next.js', 'WebDev'],
        featuredImage: null,
        status: 'Published',
        author: 'Admin',
        createdAt: '2026-08-01T08:00:00Z',
        updatedAt: '2026-08-01T08:00:00Z',
      },
      {
        id: '2',
        title: 'Mastering Tailwind CSS v4 in 10 Minutes',
        slug: 'mastering-tailwind-css-v4',
        content: '<h2>What\'s New</h2><p>Tailwind CSS v4 introduces a new visual engine, native postcss support, and simplified config files.</p>',
        seoTitle: 'Mastering Tailwind CSS v4 Guide',
        seoDescription: 'A quick guide to mastering Tailwind CSS v4 with new configuration improvements.',
        categories: ['Web Design', 'Technology'],
        tags: ['Tailwind', 'CSS'],
        featuredImage: null,
        status: 'Draft',
        author: 'Admin',
        createdAt: '2026-08-02T09:00:00Z',
        updatedAt: '2026-08-02T09:00:00Z',
      },
    ];
    fs.writeFileSync(DB_PATH, JSON.stringify(seed, null, 2), 'utf-8');
  }
}

export function getAllPosts(): BlogPost[] {
  ensureDB();
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(raw) as BlogPost[];
}

export function getPostById(id: string): BlogPost | undefined {
  return getAllPosts().find(p => p.id === id);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find(p => p.slug === slug);
}

export function savePost(data: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'> & { createdAt?: string }): BlogPost {
  ensureDB();
  const posts = getAllPosts();
  const now = new Date().toISOString();
  const newPost: BlogPost = {
    ...data,
    id: Date.now().toString(),
    createdAt: data.createdAt || now,
    updatedAt: now,
  };
  posts.unshift(newPost);
  fs.writeFileSync(DB_PATH, JSON.stringify(posts, null, 2), 'utf-8');
  return newPost;
}

export function updatePost(id: string, data: Partial<Omit<BlogPost, 'id'>>): BlogPost | null {
  ensureDB();
  const posts = getAllPosts();
  const idx = posts.findIndex(p => p.id === id);
  if (idx === -1) return null;
  const updated: BlogPost = { ...posts[idx], ...data, updatedAt: new Date().toISOString() };
  posts[idx] = updated;
  fs.writeFileSync(DB_PATH, JSON.stringify(posts, null, 2), 'utf-8');
  return updated;
}

export function deletePost(id: string): boolean {
  ensureDB();
  const posts = getAllPosts();
  const filtered = posts.filter(p => p.id !== id);
  if (filtered.length === posts.length) return false;
  fs.writeFileSync(DB_PATH, JSON.stringify(filtered, null, 2), 'utf-8');
  return true;
}

export function reorderPosts(orderedIds: string[]): boolean {
  ensureDB();
  const posts = getAllPosts();
  
  // Sort posts based on the index of their id in orderedIds.
  // Any post not found in orderedIds can be kept at the end in their original relative order.
  const idToIndex = new Map(orderedIds.map((id, index) => [id, index]));
  
  const sortedPosts = [...posts].sort((a, b) => {
    const indexA = idToIndex.has(a.id) ? idToIndex.get(a.id)! : Infinity;
    const indexB = idToIndex.has(b.id) ? idToIndex.get(b.id)! : Infinity;
    return indexA - indexB;
  });

  fs.writeFileSync(DB_PATH, JSON.stringify(sortedPosts, null, 2), 'utf-8');
  return true;
}

