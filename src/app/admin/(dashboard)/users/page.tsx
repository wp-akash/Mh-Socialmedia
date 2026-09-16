import { baseAPI } from '@/lib/api';
import { UsersClientPage } from '@/components/admin/users-client-page';

export const metadata = {
  title: 'All Users | Admin Portal',
};

export default async function AllUsersPage() {
  const users = await baseAPI.get('/users').catch(() => []);

  const mappedUsers = users.map((user: any) => ({
    id: user.id || '',
    name: user.name || '',
    email: user.email || '',
    role: user.role || 'Viewer',
    status: user.status || 'Active',
    password: user.password || '',
    createdAt: user.created_at || new Date().toISOString(),
    updatedAt: user.updated_at || new Date().toISOString(),
  }));

  return (
    <UsersClientPage initialUsers={mappedUsers} />
  );
}
