import { createAction } from "@ngrx/store";
import { props } from '@ngrx/store';

export const AllBrand = createAction(
  '[Brand] Get All Brand'
)


// export const LoadCategoryFromLocalStorage = createAction(
//   '[Category] Load Category From LocalStorage',
//     props<{ categories: Category[] }>()
// );
