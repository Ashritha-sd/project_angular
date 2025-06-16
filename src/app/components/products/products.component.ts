import { Component } from '@angular/core';
import productsData from './products_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { ZoominDirective } from '../../directives/zoomin.directive';

@Component({
  selector: 'app-products',
  imports: [ NgxPaginationModule,CommonModule,FormsModule,FontAwesomeModule, ZoominDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  ogProductsArr=productsData;
  productsArr= [...this.ogProductsArr];
  p:any;
  searchString: string='';
  faStar=faStar;
  asc_sort()
  {
    this.productsArr.sort((x,y)=>x.price-y.price);
    //console.log(this.productsArr);
  }
  desc_sort()
  {
    this.productsArr.sort((x,y)=>y.price-x.price);
    //console.log(this.productsArr);
  }
  search(searchString: string)
  {
    this.searchString=searchString.trim();
    if(searchString){
      this.productsArr=this.ogProductsArr.filter((p)=>p.title.toLowerCase().includes(this.searchString.toLowerCase()) ||
        p.category.toLowerCase().includes(this.searchString.toLowerCase()));
    }
    else{
      this.productsArr=[];
    }
  }
}
