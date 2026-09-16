import { baseAPI } from '@/lib/api';
import { EmployeeList } from '@/components/admin/employee-list';

export const metadata = {
  title: 'Team Members | Admin Portal',
};

export default async function EmployeesPage() {
  const employeesRaw = await baseAPI.get('/employees').catch(() => []);
  const employees = employeesRaw.map((e: any) => ({ ...e, bloodGroup: e.blood_group }));

  return <EmployeeList initialEmployees={employees} />;
}
