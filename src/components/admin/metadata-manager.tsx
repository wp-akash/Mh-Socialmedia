'use client';

import { useState } from 'react';
import { MetadataItem } from '@/lib/metadata-store';
import { manageCategory, manageTag } from '@/app/admin/actions/metadata';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash2, Plus, X, Save } from 'lucide-react';
import { toast } from 'sonner';

interface MetadataManagerProps {
  initialItems: MetadataItem[];
  type: 'category' | 'tag';
}

export function MetadataManager({ initialItems, type }: MetadataManagerProps) {
  const [items, setItems] = useState<MetadataItem[]>(initialItems);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editSlug, setEditSlug] = useState('');
  
  const [newName, setNewName] = useState('');
  const [newSlug, setNewSlug] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAdd = async () => {
    if (!newName.trim() || !newSlug.trim()) {
      toast.error('Name and slug are required.');
      return;
    }
    
    setIsSubmitting(true);
    const action = type === 'category' ? manageCategory : manageTag;
    const res = await action('add', { name: newName, slug: newSlug, id: '' });
    
    if (res.success) {
      toast.success(res.message);
      setNewName('');
      setNewSlug('');
      // In a real app we'd fetch the new items, but since Server Actions revalidate, 
      // the page will refresh if we rely on Server Components. However, since this is a Client Component with local state,
      // we might want to manually append it for instant feedback, but let's just let the Server Component revalidation do its job.
      // A quick fix for instant UI is just to reload the page or rely on router.refresh()
      window.location.reload();
    } else {
      toast.error(res.message);
    }
    setIsSubmitting(false);
  };

  const handleEdit = (item: MetadataItem) => {
    setEditingId(item.id);
    setEditName(item.name);
    setEditSlug(item.slug);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName('');
    setEditSlug('');
  };

  const handleSaveEdit = async (id: string) => {
    if (!editName.trim() || !editSlug.trim()) {
      toast.error('Name and slug are required.');
      return;
    }
    
    setIsSubmitting(true);
    const action = type === 'category' ? manageCategory : manageTag;
    const res = await action('edit', { id, name: editName, slug: editSlug });
    
    if (res.success) {
      toast.success(res.message);
      setEditingId(null);
      window.location.reload();
    } else {
      toast.error(res.message);
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    setIsSubmitting(true);
    const action = type === 'category' ? manageCategory : manageTag;
    const res = await action('delete', { id, name: '', slug: '' });
    
    if (res.success) {
      toast.success(res.message);
      window.location.reload();
    } else {
      toast.error(res.message);
    }
    setIsSubmitting(false);
  };

  const title = type === 'category' ? 'Categories' : 'Tags';
  const description = `Manage your blog ${type === 'category' ? 'categories' : 'tags'}.`;

  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader className="border-b bg-zinc-50/50 dark:bg-zinc-900/50 py-4">
          <CardTitle className="text-base">Add New {type === 'category' ? 'Category' : 'Tag'}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 flex gap-4 items-end">
          <div className="grid gap-2 flex-1">
            <label className="text-sm font-medium">Name</label>
            <Input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="e.g. Technology" disabled={isSubmitting} />
          </div>
          <div className="grid gap-2 flex-1">
            <label className="text-sm font-medium">Slug</label>
            <Input value={newSlug} onChange={(e) => setNewSlug(e.target.value)} placeholder="e.g. technology" disabled={isSubmitting} />
          </div>
          <Button onClick={handleAdd} disabled={isSubmitting} className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="mr-2 h-4 w-4" /> Add
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="border-b bg-zinc-50/50 dark:bg-zinc-900/50 py-4">
          <CardTitle className="text-base">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {editingId === item.id ? (
                      <Input value={editName} onChange={(e) => setEditName(e.target.value)} disabled={isSubmitting} />
                    ) : (
                      item.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === item.id ? (
                      <Input value={editSlug} onChange={(e) => setEditSlug(e.target.value)} disabled={isSubmitting} />
                    ) : (
                      item.slug
                    )}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    {editingId === item.id ? (
                      <>
                        <Button variant="ghost" size="icon" onClick={() => handleSaveEdit(item.id)} disabled={isSubmitting}>
                          <Save className="h-4 w-4 text-emerald-600" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleCancelEdit} disabled={isSubmitting}>
                          <X className="h-4 w-4 text-zinc-500" />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(item)} disabled={isSubmitting}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)} disabled={isSubmitting}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {items.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-6 text-zinc-500">
                    No {title.toLowerCase()} found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
