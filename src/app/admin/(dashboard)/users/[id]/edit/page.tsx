import { UserEditor } from '@/components/admin/user-editor';
import { baseAPI } from '@/lib/api';
import { notFound } from 'next/navigation';

interface EditUserPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: EditUserPageProps) {
  const { id } = await params;
  const user = await baseAPI.get(`/users/${id}`).catch(() => null);
  return { title: user ? `Edit: ${user.name} | Admin Portal` : 'Edit User | Admin Portal' };
}

export default async function EditUserPage({ params }: EditUserPageProps) {
  const { id } = await params;
  const user = await baseAPI.get(`/users/${id}`).catch(() => null);
  
  if (!user) notFound();

  // Map to frontend expectation
  const frontendUser = {
    ...user,
    createdAt: user.created_at,
    updatedAt: user.updated_at
  };

  return (
    <div className="space-y-6">
      <UserEditor initialData={frontendUser} />
    </div>
  );
}
