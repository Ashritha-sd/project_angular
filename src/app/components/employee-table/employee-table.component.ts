import { Component, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-employee-table',
  imports: [FontAwesomeModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs: ["employeeArr"],
  outputs: ["addressEvent"]
})
export class EmployeeTableComponent {
  employeeArr:any;
  faTrash=faTrash;
  addressEvent=new EventEmitter();
  deleteConfirmation(index:number){
    this.addressEvent.emit(index);
  }
}
