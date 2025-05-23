import { Component, input } from '@angular/core';

@Component({
  selector: 'app-category-item',
  imports: [],
   standalone: true,
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css',
  inputs: ['categoryObj']
})
export class CategoryItemComponent {
 categoryObj:any;
}
