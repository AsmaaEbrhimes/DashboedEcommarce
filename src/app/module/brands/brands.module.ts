import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands/brands.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BrandsComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BrandsModule { }
