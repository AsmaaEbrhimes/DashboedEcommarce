import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../AllTypes/auth.types';

export interface AuthState {
  success: boolean;
  error: boolean;
}

export const initialAuthState: AuthState = {
  success: false,
  error: false,
};

export const AuthReducer = createReducer(
  initialAuthState,

  on(AuthActions.AuthActions.AuthSuccess, (state) => ({
    ...state,
    success: true,
  })),

  on(AuthActions.AuthActions.clearSuccess, (state) => ({
    ...state,
    success: false,
  })),

  on(AuthActions.AuthActions.AuthError, (state) => ({
    ...state,
    error: true,
  })),

   on(AuthActions.AuthActions.clearError, (state) => ({
    ...state,
    error: false,
  })),

);
