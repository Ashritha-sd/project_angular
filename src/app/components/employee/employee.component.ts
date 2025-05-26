import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { empty } from 'rxjs';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  empArr:any;
  selectedFilter: string='all'
  constructor(private empService:EmployeeService){
    this.empArr=empService.employees;
  }
  selectFilter(filter:string){
    this.selectedFilter=filter;
    if(filter=='all')
    {
      this.empArr= this.empService.getAllEmployees();
    }
    else if(filter=='male')
    {
      this.empArr= this.empService.getMaleEmployees();
    }
    else{
       this.empArr= this.empService.getFemaleEmployees();
    }
  }
  
}
