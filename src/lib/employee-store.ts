import fs from 'fs';
import path from 'path';

export interface Employee {
  id: string;
  name: string;
  phone: string;
  bloodGroup: string;
  birthday: string; // YYYY-MM-DD
  designation: string;
  email: string;
  status: 'Active' | 'Inactive';
  createdAt: string;
  updatedAt: string;
}

const DB_PATH = path.join(process.cwd(), 'data', 'employees.json');

function ensureDB() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    const seed: Employee[] = [
      {
        id: 'e1',
        name: 'Al Amin Akash',
        phone: '+8801708591899',
        bloodGroup: 'A+',
        birthday: '1998-05-15',
        designation: 'CEO & Founder',
        email: 'akash@theicthub.com',
        status: 'Active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'e2',
        name: 'Jane Doe',
        phone: '+8801712345678',
        bloodGroup: 'B+',
        birthday: '1995-10-24',
        designation: 'Lead Developer',
        email: 'jane@theicthub.com',
        status: 'Active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ];
    fs.writeFileSync(DB_PATH, JSON.stringify(seed, null, 2), 'utf-8');
  }
}

export function getAllEmployees(): Employee[] {
  ensureDB();
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(raw) as Employee[];
}

export function getEmployeeById(id: string): Employee | undefined {
  return getAllEmployees().find(e => e.id === id);
}

export function saveEmployee(data: Omit<Employee, 'id' | 'createdAt' | 'updatedAt'>): Employee {
  ensureDB();
  const employees = getAllEmployees();
  const now = new Date().toISOString();
  const newEmployee: Employee = {
    ...data,
    id: 'emp_' + Date.now().toString(),
    createdAt: now,
    updatedAt: now,
  };
  employees.unshift(newEmployee);
  fs.writeFileSync(DB_PATH, JSON.stringify(employees, null, 2), 'utf-8');
  return newEmployee;
}

export function updateEmployee(id: string, data: Partial<Omit<Employee, 'id' | 'createdAt'>>): Employee | null {
  ensureDB();
  const employees = getAllEmployees();
  const idx = employees.findIndex(e => e.id === id);
  if (idx === -1) return null;
  const updated: Employee = { ...employees[idx], ...data, updatedAt: new Date().toISOString() };
  employees[idx] = updated;
  fs.writeFileSync(DB_PATH, JSON.stringify(employees, null, 2), 'utf-8');
  return updated;
}

export function deleteEmployee(id: string): boolean {
  ensureDB();
  const employees = getAllEmployees();
  const filtered = employees.filter(e => e.id !== id);
  if (filtered.length === employees.length) return false;
  fs.writeFileSync(DB_PATH, JSON.stringify(filtered, null, 2), 'utf-8');
  return true;
}
