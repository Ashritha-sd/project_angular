import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['aChild2', 'child2_userName'],
  outputs: ['addressEvent']
})
export class Child2Component {
  aChild2!:number;
  child2_userName!:string;
  userAddress:string='Banglore';
  addressEvent=new EventEmitter();
  sendDataToParent(){
    this.addressEvent.emit(this.userAddress);
  }
}
