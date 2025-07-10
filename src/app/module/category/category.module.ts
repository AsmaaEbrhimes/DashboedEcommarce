import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';
import { CategoryRoutingModule } from './category-routing.module';
import { AllCategoryComponent } from './all-category/all-category.component';
import { SharedModule } from '../../shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { DilogComponent } from './dilog/dilog.component';
// import { EffectCategory } from './Store/EffectCategory/EffecCategory';

@NgModule({
  declarations: [AllCategoryComponent, DilogComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    DialogModule,

    // EffectsModule.forFeature([EffectCategory]),
    // StoreModule.forFeature('categoryFeaturesKey', CategoryReducer),
  ],
})
export class CategoryModule {}
