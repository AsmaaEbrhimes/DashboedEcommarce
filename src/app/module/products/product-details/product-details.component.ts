import { Component, OnInit, signal } from '@angular/core';
interface IorderCustmer {
  Item: string,
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
      { Item: 'Product 1', quantity: 10, price: 10, total: 20 },
      { Item: 'Product 1', quantity: 10, price: 10, total: 20 },
      { Item: 'Product 1', quantity: 10, price: 10, total: 20 },
      { Item: 'Product 1', quantity: 10, price: 10, total: 20 },
      { Item: 'Product 1', quantity: 10, price: 10, total: 20 },
      { Item: 'Product 1', quantity: 10, price: 10, total: 20 },
      { Item: 'Product 1', quantity: 10, price: 10, total: 20 },
      { Item: 'Product 1', quantity: 10, price: 10, total: 20 },
      { Item: 'Product 1', quantity: 10, price: 10, total: 20 },

    ]);
  }
}
