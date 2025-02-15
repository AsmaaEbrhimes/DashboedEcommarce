import { Component } from '@angular/core';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrl: './tabel.component.scss'
})
export class TabelComponent {
  products!: any[];

ngOnInit(){

  this.products=[
    { code: 'P001', name: 'Product 1', category: 'Category 1', quantity: 20 , status:'New' , test:"ekke" , test2:"ekke", test3:"ekke"},
    { code: 'P002', name: 'Product 2', category: 'Category 2', quantity: 15 , status:'New', test:"ekke" , test2:"ekke", test3:"ekke"},
    { code: 'P003', name: 'Product 3', category: 'Category 3', quantity: 30 , status:'New', test:"ekke" , test2:"ekke", test3:"ekke"},
    { code: 'P004', name: 'Product 4', category: 'Category 4', quantity: 50, status:'padding' , test:"ekke" , test2:"ekke", test3:"ekke"},
    { code: 'P005', name: 'Product 5', category: 'Category 5', quantity: 40 , status:'padding', test:"ekke" , test2:"ekke", test3:"ekke"},
    { code: 'P006', name: 'Product 6', category: 'Category 6', quantity: 60, status:'padding' , test:"ekke" , test2:"ekke", test3:"ekke"},
    { code: 'P007', name: 'Product 7', category: 'Category 7', quantity: 25, status:'shipping', test:"ekke" , test2:"ekke", test3:"ekke" },
    { code: 'P008', name: 'Product 8', category: 'Category 8', quantity: 10, status:'shipping' , test:"ekke" , test2:"ekke", test3:"ekke" },
    { code: 'P009', name: 'Product 9', category: 'Category 9', quantity: 35, status:'shipping' , test:"ekke" , test2:"ekke", test3:"ekke" },
    { code: 'P010', name: 'Product 10', category: 'Category 10', quantity: 45 , status:'Delivered' , test:"ekke" , test2:"ekke", test3:"ekke"},
    { code: 'P011', name: 'Product 11', category: 'Category 11', quantity: 5 , status:'Delivered', test:"ekke" , test2:"ekke", test3:"ekke"},
    { code: 'P012', name: 'Product 12', category: 'Category 12', quantity: 20, status:'Delivered', test:"ekke" , test2:"ekke", test3:"ekke" }  ]
}
}
