import { Component } from '@angular/core';
// import { CategoryAnamtion } from '../../../Core/animations/category-anmations';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.scss',
  //  animations: [CategoryAnamtion]
})
export class AllproductsComponent {
  toggelcategoryprice: boolean = true
  CategoryProduct:boolean = true
  rating:boolean = true
  ToggleCategoryPrice() {
    this.toggelcategoryprice = !this.toggelcategoryprice
  }

  ToggleCategoryproduct() {
    this.CategoryProduct = !this.CategoryProduct
  }

  ToggleCategoryRating() {
    this.rating = !this.rating
  }
}
