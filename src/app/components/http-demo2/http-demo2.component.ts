import { Component } from '@angular/core';
import { EmpService } from '../../services/emp.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-http-demo2',
  imports: [],
  templateUrl: './http-demo2.component.html',
  styleUrl: './http-demo2.component.css'
})
export class HttpDemo2Component {
  employees: Employee[]=[];
  constructor(private e:EmpService){}
  ngOnInit(){
    this.e.getEmployees().subscribe((response:Employee[])=>
    {
      this.employees=response;
    })
  }
}
