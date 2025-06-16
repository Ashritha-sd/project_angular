import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, range, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {
  constructor(private httpClient: HttpClient){

  }
  ngOnInit(){
    this.create_observable();
    this.interval_demo();
    this.range_demo();
  }
  create_observable() { //publisher-subscriber model
    let publisher1=new Observable((producer)=>{
      producer.next('AAAA');
      producer.next('BBBBB');
      producer.next('CCCCC');
      producer.complete();
    }
    );
    // let subscriber1=publisher1.subscribe(
    //   (partialResponse)=>{
    //     console.log('partial Response recieved', partialResponse);
    //   },
    //   (error)=>{
    //     console.log('Something went wrong', error);
    //   },
    //   ()=>{
    //     console.log('All data recieved');
    //   }
    // )
    let subscriber1=publisher1.subscribe({
    next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.info('completed')
   });
  }
fetchUsers() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (partialResponse) => { console.log('Partial response received', partialResponse) },
      error: (error) => { console.log('Something went wrong', error); },
      complete: () => { console.log('All Data Received') }
    })
  }

  from_demo() {
    let carsArr = ['Tata', 'Honda', 'Maruti'];
    let carsObservale = from(carsArr);
    carsObservale.subscribe(
      (response) => { console.log('Response: ', response) }
    );
  }

  numPublisher: any;
  interval_demo() {
    this.numPublisher = interval(1000);
    // this.numPublisher.subscribe((val: any) => console.log(val));
  }

  range_demo() {
    let publisher_1_10 = range(1, 10);
    // publisher_1_10.subscribe((val: any) => console.log(val));

    // let publisher_1_5 = publisher_1_10.pipe(take(5));
    // publisher_1_5.subscribe((val: any) => console.log(val));

    // let publisher_1_10_square = publisher_1_10.pipe(map(ele => ele * ele));
    // publisher_1_10_square.subscribe((val: any) => console.log(val));

    let publisher_1_10_even = publisher_1_10.pipe(filter(ele => ele % 2 == 0));
    publisher_1_10_even.subscribe((val: any) => console.log(val));
  }
}
