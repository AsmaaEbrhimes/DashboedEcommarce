import { createAction, props } from '@ngrx/store';
import { Category } from "../../Interface";

export const AllCategory = createAction(
  '[Category] Get All Category'
)


export const LoadCategoryFromLocalStorage = createAction(
  '[Category] Load Category From LocalStorage',
    props<{ categories: Category[] }>()
);


export const AddCategory = createAction(
  '[Category] Add Category',
  props<{ categoryName: string }>()
);

export const EditCategory = createAction(
  '[Category] Edit Category',
  props<{ id: string; categoryName: string }>()
);

export const DeleteCategory = createAction(
  '[Category] Delete Category',
  props<{ id: string }>()
);
