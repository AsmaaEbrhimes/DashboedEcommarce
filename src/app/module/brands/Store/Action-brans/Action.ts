import { createAction } from "@ngrx/store";
import { props } from '@ngrx/store';

export const AllBrand = createAction(
  '[Brand] Get All Brand'
)

export const LoadBrandFromLocalStorage = createAction(
  '[Brand] Load Brand From LocalStorage',
  props<{ brands: any[] }>()
);

