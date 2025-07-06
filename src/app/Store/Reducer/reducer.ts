import { createReducer, on } from '@ngrx/store';
import { ActionApp } from '../Types/Types';
import { state } from '@angular/animations';

export interface AppState {
  success: boolean;
  error: boolean;
}

export const initialAppState: AppState = {
  success: false,
  error: false,
};

export const AppReducer = createReducer(
  initialAppState,

  on(ActionApp.SucessProccing, (state) => ({
    ...state,
    success: true,
  })),

  on(ActionApp.ClearSucessProccing,(state)=>({
    ...state,
    success:false
  }))
);
