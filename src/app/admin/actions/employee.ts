'use server';

import { baseAPI } from '@/lib/api';
import { revalidatePath } from 'next/cache';

export interface Employee {
  id: string;
  name: string;
  phone: string;
  bloodGroup: string;
  birthday: string;
  designation: string;
  email: string;
  status: 'Active' | 'Inactive';
}

export interface EmployeeFormData {
  id?: string;
  name: string;
  phone: string;
  bloodGroup: string;
  birthday: string;
  designation: string;
  email: string;
  status: 'Active' | 'Inactive';
}

export interface EmployeeActionResult {
  success: boolean;
  message: string;
  employee?: Employee;
}

export async function saveEmployeeAction(data: EmployeeFormData): Promise<EmployeeActionResult> {
  try {
    if (!data.name.trim()) return { success: false, message: 'Name is required.' };
    if (!data.phone.trim()) return { success: false, message: 'Phone number is required.' };
    if (!data.birthday.trim()) return { success: false, message: 'Birthday is required.' };

    let employee: Employee;
    const payload = {
      name: data.name,
      phone: data.phone,
      blood_group: data.bloodGroup,
      birthday: data.birthday,
      designation: data.designation,
      email: data.email || null,
      status: data.status,
    };

    if (data.id) {
      employee = await baseAPI.put(`/employees/${data.id}`, payload);
    } else {
      employee = await baseAPI.post('/employees', payload);
    }

    revalidatePath('/admin/employees');
    return {
      success: true,
      message: data.id ? 'Team member updated successfully!' : 'Team member added successfully!',
      employee,
    };
  } catch (error: any) {
    console.error('Save employee error:', error);
    return { success: false, message: error.message || 'An error occurred while saving the team member.' };
  }
}

export async function deleteEmployeeAction(id: string): Promise<EmployeeActionResult> {
  try {
    await baseAPI.delete(`/employees/${id}`);
    revalidatePath('/admin/employees');
    return { success: true, message: 'Team member deleted successfully.' };
  } catch (error: any) {
    console.error('Delete employee error:', error);
    return { success: false, message: error.message || 'An error occurred while deleting the team member.' };
  }
}

export async function getAllEmployeesAction(): Promise<Employee[]> {
  try {
    const data = await baseAPI.get('/employees');
    // Map snake_case to camelCase
    return data.map((e: any) => ({
      ...e,
      bloodGroup: e.blood_group,
    }));
  } catch (error) {
    console.error('Get all employees error:', error);
    return [];
  }
}
