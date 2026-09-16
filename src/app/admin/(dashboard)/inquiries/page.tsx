import { baseAPI } from '@/lib/api';
import { InquiriesTable } from '@/components/admin/inquiries-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Inquiries | Admin Portal',
};

export default async function InquiriesPage() {
  const inquiriesRaw = await baseAPI.get('/inquiries').catch(() => []);
  const inquiries = inquiriesRaw.map((i: any) => ({ ...i, createdAt: i.created_at }));
  
  const newInquiries = inquiries.filter((i: any) => i.status === 'New').length;
  const totalInquiries = inquiries.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Communications</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Manage contact forms and booking inquiries.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-sm border-zinc-200/60 dark:border-zinc-800/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Total Inquiries</CardTitle>
            <MessageSquare className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalInquiries}</div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-zinc-200/60 dark:border-zinc-800/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-500">Unread Messages</CardTitle>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 text-xs">Action Required</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newInquiries}</div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-zinc-200/60 dark:border-zinc-800/60 bg-indigo-600 text-white flex flex-col justify-center items-center p-4">
          <div className="flex flex-col items-center justify-center text-center">
             <Mail className="h-6 w-6 mb-2 opacity-80" />
             <p className="text-sm font-medium opacity-90">Respond promptly to leads to secure more projects!</p>
          </div>
        </Card>
      </div>

      {/* Table */}
      <InquiriesTable initialInquiries={inquiries} />
    </div>
  );
}
