import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { EMPLOYEE_ADDED_MESSAGE } from '../../Constants/messageConstants';


@Component({
  selector: 'app-employee-crud',
  imports: [FontAwesomeModule,
    CommonModule, FormsModule
  ],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {
   Employees = [
  { name: 'Alice', username: 'alice123', email: 'alice@example.com', phone: '123-456-7890', department: 'HR' },
  { name: 'Bob', username: 'bob456', email: 'bob@example.com', phone: '234-567-8901', department: 'Finance' },
  { name: 'Charlie', username: 'charlie789', email: 'charlie@example.com', phone: '345-678-9012', department: 'IT' },
  { name: 'David', username: 'david321', email: 'david@example.com', phone: '456-789-0123', department: 'Marketing' },
  { name: 'Eve', username: 'eve654', email: 'eve@example.com', phone: '567-890-1234', department: 'Operations' },
  { name: 'Frank', username: 'frank987', email: 'frank@example.com', phone: '678-901-2345', department: 'Legal' },
  { name: 'Grace', username: 'grace159', email: 'grace@example.com', phone: '789-012-3456', department: 'Admin' },
  { name: 'Heidi', username: 'heidi753', email: 'heidi@example.com', phone: '890-123-4567', department: 'Support' },
  { name: 'Ivan', username: 'ivan258', email: 'ivan@example.com', phone: '901-234-5678', department: 'Logistics' },
  { name: 'Judy', username: 'judy147', email: 'judy@example.com', phone: '012-345-6789', department: 'Sales' }
];

newEmployee = {
    name: '',
    username: '',
    email: '',
    phone: '',
    department: ''
  };

  addEmployee() {
    // Basic validation (optional)
    if (
      !this.newEmployee.name.trim() || 
      !this.newEmployee.username.trim() ||
      !this.newEmployee.email.trim() || 
      !this.newEmployee.phone.trim() ||
      !this.newEmployee.department.trim()
    ) {
      alert('Please fill in all fields');
      return;
    }
  
  this.Employees.push(this.newEmployee);
  this.newEmployee = { name: '', username: '', email: '', phone: '', department: '' };
    new Snackbar(EMPLOYEE_ADDED_MESSAGE,
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }

faEye=faEye;
faTrash=faTrash;
index: number=0;
selectedIndex:number=0;
//employee:any=null;
deleteConfirmation(index: number)
{
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    this.Employees.splice(index, 1);
    Swal.fire({
      title: "Deleted!",
      text: "Your record has been deleted.",
      icon: "success"
    });
  }
});
}

showEmployeeDetails(i: number){
  this.selectedIndex=i;
}

}
