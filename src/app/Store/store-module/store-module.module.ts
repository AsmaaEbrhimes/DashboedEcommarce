import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { UserEffect } from '../../module/admin-user/Store/Effects/user.effect';
import { userReducer } from '../../module/admin-user/Store/Reducser/user.reducer';
import { AppReducer } from '../../Store/Reducer/reducer';
import { EffectCategory } from '../../module/category/Store/EffectCategory/EffecCategory';
import { categoriesReducer } from '../../module/category/Store/ReducerCategory/ReducerCategory';
import { EffectsModule } from '@ngrx/effects';
import { BrandEffect } from '../../module/brands/Store/Effect-brand/Effect';
import { brandReducer } from '../../module/brands/Store/Reducer-brand/Reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ app: AppReducer }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UserEffect]),
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([EffectCategory]),
    StoreModule.forFeature('categoryFeaturesKey', categoriesReducer),
    EffectsModule.forFeature([BrandEffect]),
    StoreModule.forFeature('brand', brandReducer),
  ],
})
export class StoreModuleModule {}
