import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  //pure:false
})
export class RemainingPipe implements PipeTransform {

  transform(input: any, maxLength : number=100) {
    console.log('Remaining Pipe...');
       return maxLength - input.length;
   }

}
