import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from '../AllTypes/auth.types';
import { AuthService } from '../../auth.service';
import { exhaustMap, map ,catchError} from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class AuthEffect {
  constructor(private action$: Actions, private authservies: AuthService) {}

  loginUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.AuthActions.isLoginUser),
      exhaustMap((action: any) =>
        this.authservies.LoginUser(action.user).pipe(
          map((res: any) => {
            sessionStorage.setItem('token', res.token);
            return AuthActions.AuthActions.AuthSuccess();
          }),
        catchError((error: HttpErrorResponse) => {
          return of(AuthActions.AuthActions.AuthError());
        })
        )
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.AuthActions.isRegisterUser),
      exhaustMap((action: any) =>
        this.authservies.regitertionUser(action.user).pipe(
          map((res:any) => {
            return AuthActions.AuthActions.AuthSuccess();
          }),
        catchError((error: HttpErrorResponse) => {
          return of(AuthActions.AuthActions.AuthError());
        })
        )
      )
    )
 );
  }







