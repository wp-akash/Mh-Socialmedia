'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from '@/components/ui/table';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Search, Filter, ArrowDownUp, MoreHorizontal, Eye, Trash2, CheckCircle2, FileText, Phone, Building2 } from 'lucide-react';
import { Inquiry } from '@/lib/inquiry-store';
import { markAsRead, deleteMessage } from '@/app/admin/actions/inquiries';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export function InquiriesTable({ initialInquiries }: { initialInquiries: Inquiry[] }) {
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Booking' | 'Contact'>('All');
  const [filterStatus, setFilterStatus] = useState<'All' | 'New' | 'Read'>('All');
  const [filterService, setFilterService] = useState<string>('All');

  const viewDetails = async (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    if (inquiry.status === 'New') {
      await markAsRead(inquiry.id);
    }
  };

  // Get unique services for filter dropdown
  const uniqueServices = Array.from(
    new Set(initialInquiries.map((inq) => inq.service).filter(Boolean))
  ) as string[];

  const formatService = (srv: string) => {
    return srv.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  };

  // Filter inquiries based on state
  const filteredInquiries = initialInquiries.filter((inq) => {
    const matchesSearch =
      inq.name.toLowerCase().includes(search.toLowerCase()) ||
      inq.email.toLowerCase().includes(search.toLowerCase()) ||
      (inq.company && inq.company.toLowerCase().includes(search.toLowerCase())) ||
      inq.message.toLowerCase().includes(search.toLowerCase());

    const matchesType = filterType === 'All' || inq.type === filterType;
    const matchesStatus = filterStatus === 'All' || inq.status === filterStatus;
    const matchesService = filterService === 'All' || inq.service === filterService;

    return matchesSearch && matchesType && matchesStatus && matchesService;
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <Input 
            placeholder="Search inquiries..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800" 
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
          {/* Type Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white dark:bg-zinc-950 text-zinc-600 border-zinc-200 dark:border-zinc-800">
                <Filter className="h-4 w-4 mr-2" /> Type: {filterType}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilterType('All')}>All Types</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType('Booking')}>Booking</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType('Contact')}>Contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Status Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white dark:bg-zinc-950 text-zinc-600 border-zinc-200 dark:border-zinc-800">
                <Filter className="h-4 w-4 mr-2" /> Status: {filterStatus}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilterStatus('All')}>All Statuses</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus('New')}>New</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus('Read')}>Read</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Service Required Filter */}
          {uniqueServices.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-white dark:bg-zinc-950 text-zinc-600 border-zinc-200 dark:border-zinc-800">
                  <Filter className="h-4 w-4 mr-2" /> Service: {filterService === 'All' ? 'All Services' : formatService(filterService)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-60 overflow-y-auto">
                <DropdownMenuItem onClick={() => setFilterService('All')}>All Services</DropdownMenuItem>
                {uniqueServices.map((srv) => (
                  <DropdownMenuItem key={srv} onClick={() => setFilterService(srv)}>
                    {formatService(srv)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      <Card className="shadow-sm border-zinc-200 dark:border-zinc-800">
        <CardContent className="p-0">
          {filteredInquiries.length === 0 ? (
            <div className="text-center py-16 text-zinc-400">
              <FileText className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No inquiries found.</p>
              <p className="text-sm mt-1">Try adjusting your filters or search query.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b-zinc-200 dark:border-b-zinc-800">
                    <TableHead className="w-12 pl-4">
                      <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
                    </TableHead>
                    <TableHead className="min-w-[200px]">
                      <div className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
                        Sender <ArrowDownUp className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
                        Type / Service <ArrowDownUp className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
                        Date <ArrowDownUp className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Company / Phone</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
                        Status <ArrowDownUp className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInquiries.map((inq) => (
                    <TableRow key={inq.id} className="group border-b-zinc-100 dark:border-b-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                      <TableCell className="pl-4">
                        <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="flex flex-col">
                          <button onClick={() => viewDetails(inq)} className="text-left text-sm font-semibold hover:text-indigo-600 transition-colors">
                            {inq.name}
                          </button>
                          <span className="text-xs text-zinc-500">{inq.email}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col items-start gap-1">
                          <Badge
                            variant="outline"
                            className={
                              inq.type === 'Booking'
                                ? 'border-indigo-500 text-indigo-600 bg-indigo-50 dark:bg-indigo-950/30'
                                : 'border-fuchsia-500 text-fuchsia-600 bg-fuchsia-50 dark:bg-fuchsia-950/30'
                            }
                          >
                            {inq.type}
                          </Badge>
                          {inq.service && (
                            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider">
                              {formatService(inq.service)}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-zinc-500 whitespace-nowrap">
                        {formatDate(inq.createdAt)}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1 text-xs text-zinc-500">
                           {inq.company && <span className="flex items-center gap-1"><Building2 className="h-3 w-3"/> {inq.company}</span>}
                           {inq.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3"/> {inq.phone}</span>}
                           {!inq.company && !inq.phone && <span>—</span>}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            inq.status === 'New'
                              ? 'border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-950/30'
                              : 'border-zinc-300 text-zinc-500 bg-zinc-50 dark:bg-zinc-900'
                          }
                        >
                          {inq.status}
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
                            <DropdownMenuItem onClick={() => viewDetails(inq)}>
                              <Eye className="mr-2 h-4 w-4" /> View Details
                            </DropdownMenuItem>
                            {inq.status === 'New' && (
                              <DropdownMenuItem onClick={() => markAsRead(inq.id)}>
                                <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" /> Mark as Read
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600" onClick={() => deleteMessage(inq.id)}>
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

      <Sheet open={!!selectedInquiry} onOpenChange={(open) => !open && setSelectedInquiry(null)}>
        <SheetContent className="sm:max-w-md overflow-y-auto">
          <SheetHeader className="mb-6">
            <SheetTitle>Inquiry Details</SheetTitle>
            <SheetDescription>
              {selectedInquiry?.type === 'Booking' ? 'Project Booking Request' : 'General Contact Message'}
            </SheetDescription>
          </SheetHeader>
          
          {selectedInquiry && (
            <div className="space-y-6">
              <div className="grid gap-4 bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                 <div>
                   <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-1">Name</p>
                   <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{selectedInquiry.name}</p>
                 </div>
                 <div>
                   <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-1">Email</p>
                   <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                     <a href={`mailto:${selectedInquiry.email}`} className="text-indigo-600 hover:underline">{selectedInquiry.email}</a>
                   </p>
                 </div>
                 {selectedInquiry.phone && (
                   <div>
                     <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-1">Phone</p>
                     <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{selectedInquiry.phone}</p>
                   </div>
                 )}
                 {selectedInquiry.company && (
                   <div>
                     <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-1">Company</p>
                     <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{selectedInquiry.company}</p>
                   </div>
                 )}
              </div>

              {(selectedInquiry.service || selectedInquiry.budget) && (
                <div className="grid gap-4 bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                   {selectedInquiry.service && (
                     <div>
                       <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-1">Service Required</p>
                       <Badge variant="outline" className="border-indigo-200 bg-indigo-50 text-indigo-700">{selectedInquiry.service}</Badge>
                     </div>
                   )}
                   {selectedInquiry.budget && (
                     <div>
                       <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-1">Project Budget</p>
                       <p className="text-sm font-medium text-emerald-600">{selectedInquiry.budget}</p>
                     </div>
                   )}
                </div>
              )}

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-2">Message / Project Details</p>
                <div className="bg-white dark:bg-zinc-950 border rounded-lg p-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">
                  {selectedInquiry.message}
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
