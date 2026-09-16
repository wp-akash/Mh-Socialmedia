import fs from 'fs';
import path from 'path';

export interface Inquiry {
  id: string;
  type: 'Booking' | 'Contact';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  createdAt: string;
  status: 'New' | 'Read';
}

const INQUIRIES_DB = path.join(process.cwd(), 'data', 'inquiries.json');

function ensureDbExists() {
  if (!fs.existsSync(INQUIRIES_DB)) {
    fs.writeFileSync(INQUIRIES_DB, JSON.stringify([]));
  }
}

export function getInquiries(): Inquiry[] {
  try {
    ensureDbExists();
    const data = fs.readFileSync(INQUIRIES_DB, 'utf-8');
    return JSON.parse(data) as Inquiry[];
  } catch (error) {
    console.error('Error reading inquiries:', error);
    return [];
  }
}

export function saveInquiry(data: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Inquiry {
  try {
    const inquiries = getInquiries();
    const newInquiry: Inquiry = {
      ...data,
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
      status: 'New',
    };
    
    inquiries.unshift(newInquiry); // add to top
    
    fs.writeFileSync(INQUIRIES_DB, JSON.stringify(inquiries, null, 2));
    return newInquiry;
  } catch (error) {
    console.error('Error saving inquiry:', error);
    throw error;
  }
}

export function markInquiryAsRead(id: string): boolean {
  try {
    const inquiries = getInquiries();
    const index = inquiries.findIndex(i => i.id === id);
    if (index !== -1) {
      inquiries[index].status = 'Read';
      fs.writeFileSync(INQUIRIES_DB, JSON.stringify(inquiries, null, 2));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    return false;
  }
}

export function deleteInquiry(id: string): boolean {
  try {
    const inquiries = getInquiries();
    const filtered = inquiries.filter(i => i.id !== id);
    if (filtered.length !== inquiries.length) {
      fs.writeFileSync(INQUIRIES_DB, JSON.stringify(filtered, null, 2));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    return false;
  }
}
