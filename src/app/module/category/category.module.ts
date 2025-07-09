import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CategoryRoutingModule } from './category-routing.module';
import { AllCategoryComponent } from './all-category/all-category.component';
import { SharedModule } from '../../shared/shared.module';
import { EffectCategory } from './Store/EffectCategory/EffecCategory';

@NgModule({
  declarations: [AllCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    EffectsModule.forFeature([EffectCategory]),
    // StoreModule.forFeature('categoryFeaturesKey', CategoryReducer),
  ],
})
export class CategoryModule {}
