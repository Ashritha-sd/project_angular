import { Component } from '@angular/core';
import { EmployeeAsgnService } from '../../services/employee-asgn.service';
import { EmployeeModel } from '../../models/employee-model';
import { FormGroupDirective, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';


@Component({
  selector: 'app-subject-asgn',
  imports: [FormsModule, CommonModule,FontAwesomeModule],
  templateUrl: './subject-asgn.component.html',
  styleUrl: './subject-asgn.component.css'
})
export class SubjectAsgnComponent {
  faTrash=faTrash;
newEmployee = {
    id: 0,
  firstName: '',
  lastName: '',
  gender: '',
  sal: 0
  };
  employees: EmployeeModel[]=[];

constructor(private emp_service: EmployeeAsgnService)
{

}
 addEmployee(){
    this.emp_service.addEmployee( {...this.newEmployee});
    this.resetForm();
  }
  resetForm()
  {
  this.newEmployee.firstName='';
  this.newEmployee.lastName='',
  this.newEmployee.gender='',
  this.newEmployee.sal=0
  }
  getData(){
    this.emp_service.employeeObs.subscribe((response) => {
      this.employees = response;
    });
    return this.employees;
  }

  removeEmployee(empId : number){
    this.emp_service.clearEmployee(empId);
    this.emp_service.employeeObs.subscribe((response) => {
      this.employees = response;
    });
  }


}
