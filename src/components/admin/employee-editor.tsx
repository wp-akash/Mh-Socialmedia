'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { saveEmployeeAction } from '@/app/admin/actions/employee';
import { toast } from 'sonner';
import { Loader2, ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

interface EmployeeEditorProps {
  initialData?: {
    id: string;
    name: string;
    phone: string;
    bloodGroup: string;
    birthday: string;
    designation: string;
    email: string;
    status: 'Active' | 'Inactive';
  };
}

export function EmployeeEditor({ initialData }: EmployeeEditorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [name, setName] = useState(initialData?.name || '');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [bloodGroup, setBloodGroup] = useState(initialData?.bloodGroup || 'O+');
  const [birthday, setBirthday] = useState(initialData?.birthday || '');
  const [designation, setDesignation] = useState(initialData?.designation || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [status, setStatus] = useState<'Active' | 'Inactive'>(initialData?.status || 'Active');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return toast.error('Name is required');
    if (!phone.trim()) return toast.error('Phone number is required');
    if (!birthday.trim()) return toast.error('Birthday is required');
    if (!designation.trim()) return toast.error('Designation is required');

    startTransition(async () => {
      const res = await saveEmployeeAction({
        id: initialData?.id,
        name,
        phone,
        bloodGroup,
        birthday,
        designation,
        email,
        status,
      });

      if (res.success) {
        toast.success(res.message);
        router.push('/admin/employees');
        router.refresh();
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin/employees">
            <Button variant="outline" size="icon" className="h-9 w-9 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {initialData ? 'Edit Team Member' : 'Add Team Member'}
          </h1>
        </div>
      </div>

      <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Basic Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Al Amin Akash"
                  required
                  className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-850"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="designation">Designation *</Label>
                <Input
                  id="designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  placeholder="e.g. Lead Designer"
                  required
                  className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-850"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. email@example.com"
                  className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-850"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +8801708591899"
                  required
                  className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-850"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <select
                  id="bloodGroup"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  className="w-full h-10 px-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-55 text-sm focus:outline-none focus:ring-2 focus:ring-[#d92d45]/40"
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthday">Birthday *</Label>
                <Input
                  id="birthday"
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                  className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-850"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value as 'Active' | 'Inactive')}
                className="w-full h-10 px-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-55 text-sm focus:outline-none focus:ring-2 focus:ring-[#d92d45]/40"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-150 dark:border-zinc-850">
              <Link href="/admin/employees">
                <Button type="button" variant="outline" className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={isPending} className="bg-[#d92d45] hover:bg-[#d92d45]/90 text-white gap-2">
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" /> {initialData ? 'Update Member' : 'Add Member'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
