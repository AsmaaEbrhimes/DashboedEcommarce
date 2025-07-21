import { createAction } from "@ngrx/store";
import { props } from '@ngrx/store';
import { brandObj } from "../../Interface";

export const AllBrand = createAction(
  '[Brand] Get All Brand'
)

export const LoadBrandFromLocalStorage = createAction(
  '[Brand] Load Brand From LocalStorage',
  props<{ brands: brandObj[] }>()
);


export const CreateBrand=createAction(
    '[Brand] CreateBrand',
    props<{brandName:string}>()

)


export const EditBrand=createAction(
    '[Brand] EditBrand',
    props<{brandName:string,id:any}>()

)
