import { createAction, props } from '@ngrx/store';
import { Category } from "../../Interface";

export const AllCategory = createAction(
  '[Category] Get All Category'
)


export const LoadCategoryFromLocalStorage = createAction(
  '[Category] Load Category From LocalStorage',
    props<{ categories: Category[] }>()
);
