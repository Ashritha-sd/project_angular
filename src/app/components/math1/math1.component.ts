import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  //a:number=0;
  constructor(private mathservice: MathService){//dependency injection
   // this.a=10;
  }
  ngOnInit(){
    console.log("I'm ngOnInit from math1 component");

    console.log(this.mathservice.add(10,20));
  }
}
