import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';
import { UsersComponent } from '../users/users.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { Demo1Component } from '../demo1/demo1.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';
import { Demo2Component } from '../demo2/demo2.component';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { HttpAsgn1Component } from '../http-asgn1/http-asgn1.component';
import { HttpDemo2Component } from '../http-demo2/http-demo2.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';
import { Message1Component } from '../message1/message1.component';
import { Message2Component } from '../message2/message2.component';
import { MessageAddComponent } from '../message-add/message-add.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';
import { SignalDemo1Component } from '../signal-demo1/signal-demo1.component';
import { SignalDemo2Component } from '../signal-demo2/signal-demo2.component';
import { SignalDemo3Component } from '../signal-demo3/signal-demo3.component';
import { SubjectAsgnComponent } from '../subject-asgn/subject-asgn.component';
import { FormDemo1Component } from '../form-demo1/form-demo1.component';
import { FormDemo2Component } from '../form-demo2/form-demo2.component';
import { FormDemo3Component } from '../form-demo3/form-demo3.component';

@Component({
  selector: 'app-body',
  imports: [
    // UsersComponent
    // DatabindingComponent
    // DirectivesComponent
    // ProductsComponent
    //MyModalComponent
    Demo1Component,
    Demo2Component,
    // CommonModule
    // EmployeeCRUDComponent
    //PipesComponent
    // ParentComponent,
    // TrafficLightComponent
    //Math1Component,
    //Math2Component
    // EmployeeComponent
    // HttpDemo1Component
    //HttpAsgn1Component
    //HttpDemo2Component
    ObservableDemo1Component
    // ObservableDemo2Component
    // ObservableDemo3Component
    // Message1Component,
    // Message2Component,
    // MessageAddComponent
    // SubjectDemo1Component
    // SignalDemo1Component,
    // SignalDemo2Component
    // SignalDemo3Component
    // SubjectAsgnComponent
    // FormDemo1Component
    // FormDemo2Component
    // FormDemo3Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag:boolean=false;
}
