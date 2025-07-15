import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, switchMap, exhaustMap } from 'rxjs/operators';

import { BrandService } from "../../brand.service";
import { brandAction } from "../Types-brand/Types";

@Injectable({ providedIn: 'root' })

export class BrandEffect {
  constructor(private action$: Actions, private brandService:BrandService) {}

//   GetBrandServiesAndSaveToLocalStorage$ =createEffect(()=>
// this.action$.pipe(
// ofType(brandAction.AllBrand),
// switchMap(()=>
//   this.brandService.getAllBrands().pipe(
//     tap((brands) => localStorage.setItem('brands', JSON.stringify(brands)))
//   )
// )

// )
  //)


}
