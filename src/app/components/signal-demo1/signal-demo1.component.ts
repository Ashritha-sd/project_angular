import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo1',
  imports: [],
  templateUrl: './signal-demo1.component.html',
  styleUrl: './signal-demo1.component.css'
})
export class SignalDemo1Component {
  // num:Signal<number>=signal(0);
  // ngOnInit(){
  //   console.log("I'm ngOnInit");
  //   console.log('Count value', this.num())
  // }
  cookieCount: WritableSignal<number>=signal(10);
  butter=computed(()=> this.cookieCount()*0.1);
  sugar=computed(()=> this.cookieCount()*0.05);
  flour=computed(()=> this.cookieCount()*0.2);
  update(event: Event){
    const input=event.target as HTMLInputElement;
    this.cookieCount.set(parseInt(input.value));
  }
  
}
