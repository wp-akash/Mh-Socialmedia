import fs from 'fs';
import path from 'path';

export interface MetadataItem {
  id: string;
  name: string;
  slug: string;
}

const CATEGORIES_DB = path.join(process.cwd(), 'data', 'categories.json');
const TAGS_DB = path.join(process.cwd(), 'data', 'tags.json');

function ensureDB(dbPath: string, initialData: MetadataItem[] = []) {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2), 'utf-8');
  }
}

// Categories
export function getCategories(): MetadataItem[] {
  ensureDB(CATEGORIES_DB, [
    { id: '1', name: 'Technology', slug: 'technology' },
    { id: '2', name: 'Web Design', slug: 'web-design' }
  ]);
  const raw = fs.readFileSync(CATEGORIES_DB, 'utf-8');
  return JSON.parse(raw) as MetadataItem[];
}

export function saveCategory(name: string, slug: string): MetadataItem {
  const items = getCategories();
  const newItem = { id: Date.now().toString(), name, slug };
  items.push(newItem);
  fs.writeFileSync(CATEGORIES_DB, JSON.stringify(items, null, 2), 'utf-8');
  return newItem;
}

export function updateCategory(id: string, name: string, slug: string): MetadataItem | null {
  const items = getCategories();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], name, slug };
  fs.writeFileSync(CATEGORIES_DB, JSON.stringify(items, null, 2), 'utf-8');
  return items[idx];
}

export function deleteCategory(id: string): boolean {
  const items = getCategories();
  const filtered = items.filter(item => item.id !== id);
  if (filtered.length === items.length) return false;
  fs.writeFileSync(CATEGORIES_DB, JSON.stringify(filtered, null, 2), 'utf-8');
  return true;
}

// Tags
export function getTags(): MetadataItem[] {
  ensureDB(TAGS_DB, [
    { id: '1', name: 'React', slug: 'react' },
    { id: '2', name: 'Next.js', slug: 'nextjs' }
  ]);
  const raw = fs.readFileSync(TAGS_DB, 'utf-8');
  return JSON.parse(raw) as MetadataItem[];
}

export function saveTag(name: string, slug: string): MetadataItem {
  const items = getTags();
  const newItem = { id: Date.now().toString(), name, slug };
  items.push(newItem);
  fs.writeFileSync(TAGS_DB, JSON.stringify(items, null, 2), 'utf-8');
  return newItem;
}

export function updateTag(id: string, name: string, slug: string): MetadataItem | null {
  const items = getTags();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], name, slug };
  fs.writeFileSync(TAGS_DB, JSON.stringify(items, null, 2), 'utf-8');
  return items[idx];
}

export function deleteTag(id: string): boolean {
  const items = getTags();
  const filtered = items.filter(item => item.id !== id);
  if (filtered.length === items.length) return false;
  fs.writeFileSync(TAGS_DB, JSON.stringify(filtered, null, 2), 'utf-8');
  return true;
}
