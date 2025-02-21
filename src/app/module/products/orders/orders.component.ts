import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  products!: any[

  ];
ngOnInit(){

  this.products=[
    { Id: 'P001', Product: 'Product 1', Date: '3/1/2014', quantity: 20 , status:' Completed	' },
    { Id: 'P002', Product: 'Product 2', Date: '13/1/2014', quantity: 15 , status:' Pendding	'},
    { Id: 'P003', Product: 'Product 3', Date: '13/1/2014', quantity: 30 , status:'Cancle'},
    { Id: 'P004', Product: 'Product 4', Date: '13/1/2014', quantity: 50, status:'padding' },
    { Id: 'P005', Product: 'Product 5', Date: '13/1/2014', quantity: 40 , status:'padding'},
    { Id: 'P006', Product: 'Product 6', Date: '13/1/2014', quantity: 60, status:'padding' },
    { Id: 'P007', Product: 'Product 7', Date: '13/1/2014', quantity: 25, status:'Pendding' },
    { Id: 'P008', Product: 'Product 8', Date: '13/1/2014', quantity: 10, status:'Completed'  },
    { Id: 'P009', Product: 'Product 9', Date: '13/1/2014', quantity: 35, status:' Cancle'  },
    { Id: 'P010', Product: 'Product 10',Date: '13/1/2014', quantity: 45 , status:'Cancle' },
    { Id: 'P011', Product: 'Product 11',Date: '13/1/2014', quantity: 5 , status:' Cancle	'},
    { Id: 'P012', Product: 'Product 12',Date: '13/1/2014', quantity: 20, status:' Completed	' }  ]
}
}
