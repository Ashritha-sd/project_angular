import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee-model';

const initialData: EmployeeModel[]=[
      {
        id: 1,
        firstName: 'Alice',
        lastName: 'Johnson',
        gender: 'Female',
        sal: 50000
      },
      {
        id: 2,
        firstName: 'Bob',
        lastName: 'Smith',
        gender: 'Male',
        sal: 60000
      }
    ];

@Injectable({
  providedIn: 'root'
})
export class EmployeeAsgnService {
  publisher=new BehaviorSubject<EmployeeModel[]>([]);
  employeeObs=this.publisher.asObservable();
  private employeeArr: EmployeeModel[] = initialData;
  id: number=2;;
  constructor(){
    this.publisher.next(initialData);
  }

  addEmployee(employee: EmployeeModel){
    employee.id=++this.id;
    this.employeeArr.push(employee);
    this.publisher.next(this.employeeArr);
    
    // console.log(this.publisher.getValue());
  }
  clearEmployee(index:number){
    this.employeeArr=this.employeeArr.filter(x => x.id != index);
    this.publisher.next(this.employeeArr);
  
  }


  
}
