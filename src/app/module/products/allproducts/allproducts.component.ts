import { Component } from '@angular/core';
import { slideToggleAnimation } from '../../../Core/animations/menu-animations';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.scss',
  animations: [slideToggleAnimation]
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
