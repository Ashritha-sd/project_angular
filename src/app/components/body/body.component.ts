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

@Component({
  selector: 'app-body',
  imports: [
    //UsersComponent
    //DatabindingComponent
    // DirectivesComponent
    //ProductsComponent
    //MyModalComponent
    // Demo1Component,
    // Demo2Component,
    // CommonModule
    // EmployeeCRUDComponent
    //PipesComponent
    // ParentComponent,
    // TrafficLightComponent
    //Math1Component,
    //Math2Component
    EmployeeComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag:boolean=true;
}
