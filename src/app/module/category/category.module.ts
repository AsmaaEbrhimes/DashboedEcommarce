import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CategoryRoutingModule } from './category-routing.module';
import { AllCategoryComponent } from './all-category/all-category.component';
import { SharedModule } from '../../shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
// import { EffectCategory } from './Store/EffectCategory/EffecCategory';

@NgModule({
  declarations: [AllCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    DialogModule,
    ReactiveFormsModule
  ],
})
export class CategoryModule {}
