import { on } from "@ngrx/store";

import { createReducer } from "@ngrx/store";
import { brandAction } from "../Types-brand/Types";
export interface BrandState {
  brands: any[];
}


const initialState: BrandState = {
  brands: [],
}


export const brandReducer = createReducer(
  initialState,
  on(brandAction.LoadBrandFromLocalStorage, (state, { brands }) => ({
    ...state,
    brands
  }))
)
