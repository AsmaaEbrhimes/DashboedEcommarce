import { Component, OnInit, signal } from '@angular/core';
interface IorderCustmer {
  id: number,
   quantity: number,
   price: number,
   total: number
}
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  orderCustemer = signal<IorderCustmer[]>([]);


ngOnInit(): void {
  this.getOrderDetails()
}
  getOrderDetails() {
    this.orderCustemer.set([
      { id:1, quantity: 10, price: 10, total: 20 },
      { id:2, quantity: 10, price: 10, total: 20 },
      { id:3, quantity: 10, price: 10, total: 20 },
      { id:4, quantity: 10, price: 10, total: 20 },
      { id:5, quantity: 10, price: 10, total: 20 },
      { id:6, quantity: 10, price: 10, total: 20 },
      { id:7, quantity: 10, price: 10, total: 20 },
      { id:8, quantity: 10, price: 10, total: 20 },

    ]);
  }
}
