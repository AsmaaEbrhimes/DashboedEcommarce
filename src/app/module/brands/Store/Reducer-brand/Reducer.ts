import { on } from "@ngrx/store";

import { createReducer } from "@ngrx/store";
import { brandAction } from "../Types-brand/Types";
import { brandObj } from "../../Interface";
export interface BrandState {
  brands: brandObj[]
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
