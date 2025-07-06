import { Component } from '@angular/core';
export interface IOrder {
  id: number;
  Product: string;
  Date: string;
  quantity: number;
  status: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})

export class OrdersComponent {
  products: IOrder[] = [];

  ngOnInit() {
    this.products = [
      { id:1, Product: 'Product', Date: '3/1/2014', quantity: 20, status: ' Completed	' },
      { id:2, Product: 'Product', Date: '13/1/2014', quantity: 15, status: ' Pendding	' },
      { id:3, Product: 'Product', Date: '13/1/2014', quantity: 30, status: 'Cancle' },
      { id:4, Product: 'Product', Date: '13/1/2014', quantity: 50, status: 'padding' },
      { id:5, Product: 'Product', Date: '13/1/2014', quantity: 40, status: 'padding' },
    ]
  }


}
