import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  //pure: false
})
export class SearchPipe implements PipeTransform {

  transform(employee: any[], searchTxt : string='') {
    searchTxt=searchTxt.toLowerCase();
    return employee.filter((emp)=>Object.values(emp).join(' ').toLowerCase().includes(searchTxt));
  }

}
