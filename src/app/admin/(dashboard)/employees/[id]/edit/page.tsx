import { baseAPI } from '@/lib/api';
import { EmployeeEditor } from '@/components/admin/employee-editor';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Edit Team Member | Admin Portal',
};

export default async function EditEmployeePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const employee = await baseAPI.get(`/employees/${id}`).catch(() => null);

  if (!employee) return notFound();

  return (
    <EmployeeEditor
      initialData={{
        id: employee.id,
        name: employee.name,
        phone: employee.phone,
        bloodGroup: employee.blood_group,
        birthday: employee.birthday,
        designation: employee.designation,
        email: employee.email,
        status: employee.status,
      }}
    />
  );
}
