import { LocalStorageService } from './../../../../Core/servies/local-storage.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, switchMap, exhaustMap } from 'rxjs/operators';
import { BrandService } from '../../brand.service';
import { brandAction } from '../Types-brand/Types';
import { ActionApp } from '../../../../Store/Types/Types';

@Injectable({ providedIn: 'root' })
export class BrandEffect {
  constructor(
    private action$: Actions,
     private brandService: BrandService,
     private LocalStorageService:LocalStorageService
    ) {}

  saveBrandsToStorage$ = createEffect(() =>
    this.action$.pipe(
      ofType(brandAction.AllBrand),
      switchMap(() =>
        this.brandService.getAllBrands().pipe(
          tap((res: any) => {
            localStorage.setItem('brands', JSON.stringify(res.data));
            this.LocalStorageService.set('brands',res.data)
          }),
          switchMap((res: any) => [
            brandAction.LoadBrandFromLocalStorage({ brands: res.data }),
          ])
        )
      )
    )
  );


  AddCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(brandAction.CreateBrand),
      exhaustMap((action) =>
        this.brandService.AddBrandInDataBase(action.brandName).pipe(
          switchMap((res) => {
            return this.refreshCategoriesAndNotify();
          })
        )
      )
    )
  );



EditCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(brandAction.EditBrand),
      exhaustMap((action) =>
        this.brandService.EditBrandInDataBase(action.brandName,action.id).pipe(
          switchMap((res) => {
            return this.refreshCategoriesAndNotify();
          })
        )
      )
    )
  );



  private refreshCategoriesAndNotify() {
    return [brandAction.AllBrand(), ActionApp.SucessProccing()];
  }
}
