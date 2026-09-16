'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from '@/components/ui/table';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { 
  Plus, MoreHorizontal, Edit, Trash2, Search, ArrowDownUp, Filter, User, Phone, Cake, Droplet, UserPlus
} from 'lucide-react';
import { Employee } from '@/lib/employee-store';
import { deleteEmployeeAction } from '@/app/admin/actions/employee';
import { toast } from 'sonner';

interface EmployeeListProps {
  initialEmployees: Employee[];
}

const MONTHS = [
  { value: 'all', label: 'All Birthday Months' },
  { value: '01', label: 'January' },
  { value: '02', label: 'February' },
  { value: '03', label: 'March' },
  { value: '04', label: 'April' },
  { value: '05', label: 'May' },
  { value: '06', label: 'June' },
  { value: '07', label: 'July' },
  { value: '08', label: 'August' },
  { value: '09', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
];

const BLOOD_GROUPS = ['All', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export function EmployeeList({ initialEmployees }: EmployeeListProps) {
  const router = useRouter();
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [search, setSearch] = useState('');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortField, setSortField] = useState<'name' | 'birthday' | 'designation' | 'status'>('name');
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    setEmployees(initialEmployees);
  }, [initialEmployees]);

  const totalCount = employees.length;
  const activeCount = employees.filter(e => e.status === 'Active').length;

  const getMonthLabel = (val: string) => {
    return MONTHS.find(m => m.value === val)?.label || 'All Birthday Months';
  };

  const filteredAndSortedEmployees = useMemo(() => {
    let result = [...employees];

    // Search Name, designation, phone, email
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        e => e.name.toLowerCase().includes(q) || 
             e.designation.toLowerCase().includes(q) ||
             e.phone.includes(q) ||
             e.email.toLowerCase().includes(q)
      );
    }

    // Month of Birthday Filter (checking YYYY-MM-DD's MM part)
    if (selectedMonth !== 'all') {
      result = result.filter(e => {
        if (!e.birthday) return false;
        const parts = e.birthday.split('-');
        return parts.length >= 2 && parts[1] === selectedMonth;
      });
    }

    // Blood Group Filter
    if (selectedBloodGroup !== 'All') {
      result = result.filter(e => e.bloodGroup === selectedBloodGroup);
    }

    // Status Filter
    if (selectedStatus !== 'all') {
      result = result.filter(e => e.status === selectedStatus);
    }

    // Sorting
    result.sort((a, b) => {
      let valA: any = '';
      let valB: any = '';

      if (sortField === 'name') {
        valA = a.name.toLowerCase();
        valB = b.name.toLowerCase();
      } else if (sortField === 'designation') {
        valA = a.designation.toLowerCase();
        valB = b.designation.toLowerCase();
      } else if (sortField === 'birthday') {
        valA = a.birthday;
        valB = b.birthday;
      } else if (sortField === 'status') {
        valA = a.status.toLowerCase();
        valB = b.status.toLowerCase();
      }

      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });

    return result;
  }, [employees, search, selectedMonth, selectedBloodGroup, selectedStatus, sortField, sortAsc]);

  const handleSort = (field: 'name' | 'birthday' | 'designation' | 'status') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;

    try {
      const res = await deleteEmployeeAction(id);
      if (res.success) {
        toast.success(res.message);
        setEmployees(prev => prev.filter(e => e.id !== id));
      } else {
        toast.error(res.message);
      }
    } catch {
      toast.error('An error occurred.');
    }
  };

  const formatBirthdate = (dateStr: string) => {
    if (!dateStr) return '—';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Team Members</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Manage your employees, blood groups, and birthday tracks.
          </p>
        </div>
        <Link href="/admin/employees/new">
          <Button className="bg-[#d92d45] hover:bg-[#d92d45]/90 text-white gap-2">
            <UserPlus className="h-4 w-4" /> Add Team Member
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Total Members</CardTitle>
            <User className="h-4 w-4 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCount}</div>
          </CardContent>
        </Card>
        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Active Members</CardTitle>
            <Badge variant="outline" className="border-emerald-500 text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20">
              Active
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filter and Search controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <Input
            placeholder="Search name, phone, designation..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Birthday Month Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                <Cake className="h-4 w-4 mr-2 text-indigo-500" /> Birth Month: {getMonthLabel(selectedMonth)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-60 overflow-y-auto">
              {MONTHS.map(m => (
                <DropdownMenuItem key={m.value} onClick={() => setSelectedMonth(m.value)}>
                  {m.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Blood Group Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                <Droplet className="h-4 w-4 mr-2 text-red-500" /> Blood Group: {selectedBloodGroup}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {BLOOD_GROUPS.map(bg => (
                <DropdownMenuItem key={bg} onClick={() => setSelectedBloodGroup(bg)}>
                  {bg}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Status Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                <Filter className="h-4 w-4 mr-2" /> Status: {selectedStatus === 'all' ? 'All Status' : selectedStatus}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedStatus('all')}>All Status</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedStatus('Active')}>Active</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedStatus('Inactive')}>Inactive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main Table */}
      <Card className="shadow-sm border-zinc-200 dark:border-zinc-800">
        <CardContent className="p-0">
          {filteredAndSortedEmployees.length === 0 ? (
            <div className="text-center py-16 text-zinc-400">
              <User className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No team members found.</p>
              <p className="text-sm mt-1">Try adjusting your filters or search query.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b-zinc-200 dark:border-b-zinc-800">
                    <TableHead className="cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 pl-4" onClick={() => handleSort('name')}>
                      <div className="flex items-center gap-1">
                        Name / Email <ArrowDownUp className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100" onClick={() => handleSort('designation')}>
                      <div className="flex items-center gap-1">
                        Designation <ArrowDownUp className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead className="cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100" onClick={() => handleSort('birthday')}>
                      <div className="flex items-center gap-1">
                        Birthday <ArrowDownUp className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Blood Group</TableHead>
                    <TableHead className="cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100" onClick={() => handleSort('status')}>
                      <div className="flex items-center gap-1">
                        Status <ArrowDownUp className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAndSortedEmployees.map((emp) => (
                    <TableRow key={emp.id} className="group border-b-zinc-100 dark:border-b-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                      <TableCell className="pl-4 font-medium">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{emp.name}</span>
                          {emp.email && <span className="text-xs text-zinc-500">{emp.email}</span>}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-zinc-700 dark:text-zinc-300">
                        {emp.designation}
                      </TableCell>
                      <TableCell className="text-sm text-zinc-500 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Phone className="h-3.5 w-3.5 text-zinc-400" />
                          {emp.phone}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-zinc-500">
                        <div className="flex items-center gap-1">
                          <Cake className="h-3.5 w-3.5 text-zinc-400" />
                          {formatBirthdate(emp.birthday)}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">
                        <Badge variant="outline" className="border-red-200 bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400">
                          {emp.bloodGroup}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            emp.status === 'Active'
                              ? 'border-emerald-500 text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20'
                              : 'border-zinc-300 text-zinc-500 bg-zinc-50 dark:bg-zinc-900'
                          }
                        >
                          {emp.status}
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
                            <DropdownMenuItem onClick={() => router.push(`/admin/employees/${emp.id}/edit`)}>
                              <Edit className="mr-2 h-4 w-4" /> Edit Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(emp.id)}>
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
