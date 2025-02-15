import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ProductsRoutingModule } from './products-routing.module';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


@NgModule({
  declarations: [
    CreateproductComponent,
    ViewproductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DropdownModule,
  ]
})
export class ProductsModule { }
