import { createAction, props } from "@ngrx/store";

export const isLoginUser=createAction(
  '[login]Login User',
   props<{ user: any }>()
)

export const isRegisterUser=createAction(
  '[register]register User',
   props<{ user: any }>()
)

export const AuthSuccess = createAction(
  '[Auth] Auth Success',
);
export const clearSuccess = createAction(
  '[Auth] Clear Success'
);

export const AuthError = createAction(
  '[Auth] Auth Error',
);

export const clearError = createAction(
  '[Auth] Clear Error',
);





