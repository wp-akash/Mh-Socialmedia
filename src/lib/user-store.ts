import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
  password: string;
  createdAt: string;
  updatedAt: string;
}

const DB_PATH = path.join(process.cwd(), 'data', 'users.json');

function ensureDB() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    const seed: User[] = [
      {
        id: 'u1',
        name: 'Al Amin Akash',
        email: 'akash@theicthub.com',
        role: 'Admin',
        status: 'Active',
        password: 'admin123',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'u2',
        name: 'Jane Doe',
        email: 'jane@theicthub.com',
        role: 'Editor',
        status: 'Active',
        password: 'editor123',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ];
    fs.writeFileSync(DB_PATH, JSON.stringify(seed, null, 2), 'utf-8');
  }
}

export function getAllUsers(): User[] {
  ensureDB();
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(raw) as User[];
}

export function getUserById(id: string): User | undefined {
  return getAllUsers().find(u => u.id === id);
}

export function saveUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): User {
  ensureDB();
  const users = getAllUsers();
  const now = new Date().toISOString();
  const newUser: User = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
  };
  users.unshift(newUser);
  fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2), 'utf-8');
  return newUser;
}

export function updateUser(id: string, data: Partial<Omit<User, 'id' | 'createdAt'>>): User | null {
  ensureDB();
  const users = getAllUsers();
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return null;
  const updated: User = { ...users[idx], ...data, updatedAt: new Date().toISOString() };
  users[idx] = updated;
  fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2), 'utf-8');
  return updated;
}

export function deleteUser(id: string): boolean {
  ensureDB();
  const users = getAllUsers();
  const filtered = users.filter(u => u.id !== id);
  if (filtered.length === users.length) return false;
  fs.writeFileSync(DB_PATH, JSON.stringify(filtered, null, 2), 'utf-8');
  return true;
}
