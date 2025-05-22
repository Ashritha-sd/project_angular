import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number=0) {
      const suffix=['th','st','nd','rd'];
      const mod100=value%100;
      const mod10=value%10;

      if(mod100>10 && mod100<21)
      {
        return value+suffix[0];
      }
      if(mod10>=1 && mod10<=3)
      {
        return value+suffix[mod10];
      }
      return value+suffix[0];
  }

}
