import { createReducer, on } from '@ngrx/store';
import { ActionCategory } from '../TypesCategory/TypesCategory';
import { Category } from '../../Interface';

export interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categoriesReducer = createReducer(
    initialState,
  on(ActionCategory.LoadCategoryFromLocalStorage, (state, { categories }) => ({
    ...state,
    categories,
  }))
);
