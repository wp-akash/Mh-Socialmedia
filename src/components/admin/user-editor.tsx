'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Save, Loader2 } from 'lucide-react';
import { saveUserAction } from '@/app/admin/actions/user';
import { toast } from 'sonner';
import Link from 'next/link';

interface UserEditorProps {
  initialData?: {
    id: string;
    name: string;
    email: string;
    role: 'Admin' | 'Editor' | 'Viewer';
    status: 'Active' | 'Inactive';
  };
}

export function UserEditor({ initialData }: UserEditorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [role, setRole] = useState<'Admin' | 'Editor' | 'Viewer'>(initialData?.role || 'Viewer');
  const [status, setStatus] = useState<'Active' | 'Inactive'>(initialData?.status || 'Active');
  const [password, setPassword] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);

  console.log(initialData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        const payload: any = {
          name,
          email,
          role,
          status,
        };

        if (initialData?.id) {
          payload.id = initialData.id;
        }

        if (!initialData || (showChangePassword && password.trim())) {
          payload.password = password;
        }

        const res = await saveUserAction(payload);

        if (res.success) {
          toast.success(res.message);
          router.push('/admin/users');
          router.refresh();
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        toast.error('An error occurred while saving the user.');
      }
    });
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Back navigation & Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin/users">
            <Button variant="outline" size="icon" className="h-9 w-9 bg-white dark:bg-zinc-950">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {initialData ? 'Edit User' : 'Add New User'}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-0.5">
              {initialData ? 'Modify user credentials and role' : 'Configure user role and system permissions'}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="shadow-sm border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="text-base font-semibold">User Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter user name"
                required
                className="bg-white dark:bg-zinc-950"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
                disabled={!!initialData}
                className="bg-white dark:bg-zinc-950"
              />
              {initialData && (
                <p className="text-[11px] text-zinc-400">Email address cannot be changed after registration.</p>
              )}
            </div>

            {!initialData && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter account password"
                  required
                  className="bg-white dark:bg-zinc-950"
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <select
                  id="role"
                  value={role}
                  onChange={e => setRole(e.target.value as any)}
                  className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300"
                >
                  <option value="Viewer">Viewer</option>
                  <option value="Editor">Editor</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  value={status}
                  onChange={e => setStatus(e.target.value as any)}
                  className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            {initialData && (
              <div className="space-y-4 pt-4 border-t border-zinc-150 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="changePasswordToggle"
                    checked={showChangePassword}
                    onChange={e => setShowChangePassword(e.target.checked)}
                    className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                  />
                  <Label htmlFor="changePasswordToggle" className="cursor-pointer font-medium text-zinc-700 dark:text-zinc-300">
                    Change User Password
                  </Label>
                </div>

                {showChangePassword && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="Enter new password"
                      required={showChangePassword}
                      className="bg-white dark:bg-zinc-950"
                    />
                  </div>
                )}
              </div>
            )}

            <div className="pt-4 flex justify-end">
              <Button type="submit" disabled={isPending} className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-[120px]">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Save User
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
