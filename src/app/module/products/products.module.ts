import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ProductsRoutingModule } from './products-routing.module';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { OrdersComponent } from './orders/orders.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    CreateproductComponent,
    ViewproductComponent,
    AllproductsComponent,
    ShoppingcartComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DropdownModule,
    TableModule
  ]
})
export class ProductsModule { }
