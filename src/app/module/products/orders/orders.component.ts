import { Component } from '@angular/core';
export interface IOrder {
  Id: string;
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
  headproduct: any

  ngOnInit() {
    this.headproduct = {
      Id: "Id",
      Product: "Product",
      Date: "Date",
      quantity: "quantity",
      status: "status"
    }


    this.products = [
      { Id: 'P001', Product: 'Product', Date: '3/1/2014', quantity: 20, status: ' Completed	' },
      { Id: 'P002', Product: 'Product', Date: '13/1/2014', quantity: 15, status: ' Pendding	' },
      { Id: 'P003', Product: 'Product', Date: '13/1/2014', quantity: 30, status: 'Cancle' },
      { Id: 'P004', Product: 'Product', Date: '13/1/2014', quantity: 50, status: 'padding' },
      { Id: 'P005', Product: 'Product', Date: '13/1/2014', quantity: 40, status: 'padding' },
      { Id: 'P006', Product: 'Product', Date: '13/1/2014', quantity: 60, status: 'padding' },
      { Id: 'P007', Product: 'Product', Date: '13/1/2014', quantity: 25, status: 'Pendding' },
      { Id: 'P008', Product: 'Product', Date: '13/1/2014', quantity: 10, status: 'Completed' },
      { Id: 'P009', Product: 'Product', Date: '13/1/2014', quantity: 35, status: ' Cancle' },
      { Id: 'P010', Product: 'Product', Date: '13/1/2014', quantity: 45, status: 'Cancle' },
      { Id: 'P011', Product: 'Product', Date: '13/1/2014', quantity: 5, status: ' Cancle	' },
      { Id: 'P012', Product: 'Product', Date: '13/1/2014', quantity: 20, status: ' Completed	' }
    ]
  }
}
