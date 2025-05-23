import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
  outputs: ["addressEvent1"]
})
export class EmployeeAddComponent {

  newEmployee = {
    name: '',
    username: '',
    email: ''
  };
  addressEvent1=new EventEmitter();
  addEmployee() {
    // Basic validation (optional)
    if (
      !this.newEmployee.name.trim() || 
      !this.newEmployee.username.trim() ||
      !this.newEmployee.email.trim()
    ) {
      alert('Please fill in all fields');
      return;
    }
    this.addressEvent1.emit(this.newEmployee);

  }
}
