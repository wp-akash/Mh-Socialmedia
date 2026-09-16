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
  Plus, MoreHorizontal, Edit, Trash2, Search, ArrowDownUp, Filter, User, ShieldAlert, ShieldCheck, Mail
} from 'lucide-react';
import { User as UserType } from '@/lib/user-store';
import { deleteUserAction } from '@/app/admin/actions/user';
import { toast } from 'sonner';

interface UsersClientPageProps {
  initialUsers: UserType[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function UsersClientPage({ initialUsers }: UsersClientPageProps) {
  const [users, setPosts] = useState<UserType[]>(initialUsers);
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortField, setSortField] = useState<'name' | 'email' | 'role' | 'status' | 'createdAt'>('createdAt');
  const [sortAsc, setSortAsc] = useState(false);

  useEffect(() => {
    setPosts(initialUsers);
  }, [initialUsers]);

  const totalCount = users.length;
  const adminCount = users.filter(u => u.role === 'Admin').length;
  const activeCount = users.filter(u => u.status === 'Active').length;

  const filteredAndSortedUsers = useMemo(() => {
    let result = [...users];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
      );
    }

    if (selectedRole !== 'all') {
      result = result.filter(u => u.role === selectedRole);
    }

    if (selectedStatus !== 'all') {
      result = result.filter(u => u.status === selectedStatus);
    }

    result.sort((a, b) => {
      let valA: any = '';
      let valB: any = '';

      if (sortField === 'name') {
        valA = a.name.toLowerCase();
        valB = b.name.toLowerCase();
      } else if (sortField === 'email') {
        valA = a.email.toLowerCase();
        valB = b.email.toLowerCase();
      } else if (sortField === 'role') {
        valA = a.role.toLowerCase();
        valB = b.role.toLowerCase();
      } else if (sortField === 'status') {
        valA = a.status.toLowerCase();
        valB = b.status.toLowerCase();
      } else if (sortField === 'createdAt') {
        valA = new Date(a.createdAt).getTime();
        valB = new Date(b.createdAt).getTime();
      }

      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });

    return result;
  }, [users, search, selectedRole, selectedStatus, sortField, sortAsc]);

  const handleSort = (field: 'name' | 'email' | 'role' | 'status' | 'createdAt') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;
    try {
      const res = await deleteUserAction(id);
      if (res.success) {
        toast.success(res.message);
        setPosts(users.filter(u => u.id !== id));
      } else {
        toast.error(res.message || 'Failed to delete user.');
      }
    } catch (err) {
      toast.error('An error occurred while deleting the user.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Manage admin panel users and access levels.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-sm border-zinc-200/60 dark:border-zinc-800/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Total Users</CardTitle>
            <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50 border-0 text-xs">Overall</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCount}</div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-zinc-200/60 dark:border-zinc-800/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Administrators</CardTitle>
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-0 text-xs">Access Level</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{adminCount}</div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-zinc-200/60 dark:border-zinc-800/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Active Accounts</CardTitle>
            <Badge variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-50 border-0 text-xs">Status</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCount}</div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 flex flex-col justify-center items-center p-4">
           <Link href="/admin/users/new" className="w-full h-full flex items-center justify-center">
             <Button className="w-full bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800">
               <Plus className="h-4 w-4 mr-2" /> Add User
             </Button>
           </Link>
        </Card>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <Input 
            placeholder="Search users..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800" 
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Role Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white dark:bg-zinc-950 text-zinc-600 border-zinc-200 dark:border-zinc-800">
                <Filter className="h-4 w-4 mr-2" /> Role: {selectedRole === 'all' ? 'All' : selectedRole}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuRadioGroup value={selectedRole} onValueChange={setSelectedRole}>
                <DropdownMenuRadioItem value="all">All Roles</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Admin">Admin</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Editor">Editor</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Viewer">Viewer</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Status Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white dark:bg-zinc-950 text-zinc-600 border-zinc-200 dark:border-zinc-800">
                <Filter className="h-4 w-4 mr-2" /> Status: {selectedStatus === 'all' ? 'All' : selectedStatus}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuRadioGroup value={selectedStatus} onValueChange={setSelectedStatus}>
                <DropdownMenuRadioItem value="all">All Status</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Active">Active</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Inactive">Inactive</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {(search || selectedRole !== 'all' || selectedStatus !== 'all') && (
            <Button 
              variant="ghost" 
              onClick={() => { setSearch(''); setSelectedRole('all'); setSelectedStatus('all'); }}
              className="text-xs text-zinc-500 hover:text-zinc-900"
            >
              Reset Filters
            </Button>
          )}
        </div>
      </div>

      {/* Users Table */}
      <Card className="shadow-sm border-zinc-200 dark:border-zinc-800">
        <CardContent className="p-0">
          {filteredAndSortedUsers.length === 0 ? (
            <div className="text-center py-16 text-zinc-400">
              <User className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No users found matching the filters.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b-zinc-200 dark:border-b-zinc-800">
                    <TableHead className="min-w-[200px] pl-4">
                      <button 
                        onClick={() => handleSort('name')}
                        className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold"
                      >
                        Name <ArrowDownUp className="h-3 w-3" />
                      </button>
                    </TableHead>
                    <TableHead>
                      <button 
                        onClick={() => handleSort('email')}
                        className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold"
                      >
                        Email <ArrowDownUp className="h-3 w-3" />
                      </button>
                    </TableHead>
                    <TableHead>
                      <button 
                        onClick={() => handleSort('role')}
                        className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold"
                      >
                        Role <ArrowDownUp className="h-3 w-3" />
                      </button>
                    </TableHead>
                    <TableHead>
                      <button 
                        onClick={() => handleSort('status')}
                        className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold"
                      >
                        Status <ArrowDownUp className="h-3 w-3" />
                      </button>
                    </TableHead>
                    <TableHead>
                      <button 
                        onClick={() => handleSort('createdAt')}
                        className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold"
                      >
                        Created At <ArrowDownUp className="h-3 w-3" />
                      </button>
                    </TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAndSortedUsers.map((item) => (
                    <TableRow key={item.id} className="group border-b-zinc-100 dark:border-b-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                      <TableCell className="font-medium pl-4">
                        <div className="flex items-center gap-2.5">
                          <div className="h-8 w-8 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs uppercase border border-indigo-100 dark:border-indigo-900/50">
                            {item.name.charAt(0)}
                          </div>
                          <span className="text-zinc-900 dark:text-zinc-50 font-semibold">{item.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-zinc-500">
                        <div className="flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-zinc-400" />
                          {item.email}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 text-sm">
                          {item.role === 'Admin' ? (
                            <ShieldAlert className="h-4 w-4 text-rose-500" />
                          ) : (
                            <ShieldCheck className="h-4 w-4 text-blue-500" />
                          )}
                          <span className="font-medium text-zinc-700 dark:text-zinc-300">{item.role}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            item.status === 'Active'
                              ? 'border-emerald-500 text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30'
                              : 'border-zinc-300 text-zinc-500 bg-zinc-50 dark:bg-zinc-900/30'
                          }
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-zinc-500 whitespace-nowrap">
                        {formatDate(item.createdAt)}
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
                              <Link href={`/admin/users/${item.id}/edit`}>
                                <Edit className="mr-2 h-4 w-4" /> Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleDelete(item.id)} className="text-red-600 dark:text-red-400 focus:text-red-600 cursor-pointer">
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
