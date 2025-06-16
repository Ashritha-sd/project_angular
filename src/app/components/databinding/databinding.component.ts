import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule
  ],
  templateUrl: './databinding.component.html',
  //styles: ['h3 {color:red};'],
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  userName: string = 'MS Dhoni';
  img_url: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5ambjYHvUxhVpP7OkJusSlwwDHUg0Q8ygg&s';
  
  myColSpanVal: number=2;

  flag: boolean = false;
  
  f1(){
    alert("I'm f1 function");
  }

  num1:number=1;
  num2:number=1;
  addResult:number=0;
  addition(val1: string | number,val2: string | number){
    this.addResult=+val1 + +val2;
  }


  show: boolean=false;
  toggle()
  {
    this.show=!this.show;
  }

  txt:string='';
  state_selected:string='nothing';

  operator:string='';
  res:number=0;

  perform(val1: string | number,val2: string | number){
    this.res=eval(+val1 +this.operator+ +val2)
  }

  flag1: string="password";
  switch(){
    this.flag1=this.flag1==="password"? "text":"password";
  }

  counter: number=0;
  doubleCounter:number=this.counter*2;

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  reset(){
    this.counter=0;
  }


  // bgcolor :string ="white";
  // textcolor:string="black"
  // theme()
  // {

  //   this.bgcolor=this.bgcolor==="white"? "black":"white";
  //   this.textcolor=this.textcolor==="white"? "black":"white";
  // }

  isDark: boolean=false;
  theme(){
    this.isDark=!this.isDark;
    document.body.style.backgroundColor=this.isDark? 'black':'white';
    document.body.style.color=this.isDark? 'white':'black';
  }

}