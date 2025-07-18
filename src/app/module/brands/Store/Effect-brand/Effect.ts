import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, switchMap, exhaustMap } from 'rxjs/operators';

import { BrandService } from '../../brand.service';
import { brandAction } from '../Types-brand/Types';

@Injectable({ providedIn: 'root' })
export class BrandEffect {
  constructor(private action$: Actions, private brandService: BrandService) {}

  saveBrandsToStorage$ = createEffect(() =>
    this.action$.pipe(
      ofType(brandAction.AllBrand),
      switchMap(() =>
        this.brandService.getAllBrands().pipe(
          tap((res: any) => {
            console.log(res)
            localStorage.setItem('brands', JSON.stringify(res.data));
          }),
          switchMap((res: any) => [
            brandAction.LoadBrandFromLocalStorage({ brands: res.data }),
          ])
        )
      )
    )
  );






}
