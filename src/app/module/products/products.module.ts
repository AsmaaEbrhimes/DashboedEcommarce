import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ProductsRoutingModule } from './products-routing.module';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AllproductsComponent } from './allproducts/allproducts.component';


@NgModule({
  declarations: [
    CreateproductComponent,
    ViewproductComponent,
    AllproductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DropdownModule,
  ]
})
export class ProductsModule { }
