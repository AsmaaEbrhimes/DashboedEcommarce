import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../users.service';
import { tap, switchMap, exhaustMap } from 'rxjs/operators';
import { UserActions } from '../Types/typesUser';
import { ActionApp } from '../../../../Store/Types/Types';

@Injectable({ providedIn: 'root' })
export class UserEffect {
  constructor(private action$: Actions, private userservies: UsersService) {}

  saveUsersToStorage$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.AllUser),
      switchMap(() =>
        this.userservies.getAllUsers().pipe(
          tap((res: any) => {
            localStorage.setItem('allUsers', JSON.stringify(res.data));
          }),
          switchMap((res: any) => [
            UserActions.LoadUsersFromLocalStorage({ users: res.data }),
          ])
        )
      )
    )
  );

  AddAdminUeser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.AddUser),
      exhaustMap((action: any) =>
        this.userservies.AddUserAdmin(action.addData).pipe(
          switchMap((res) => {
            return [UserActions.AllUser(), ActionApp.SucessProccing()];
          })
        )
      )
    )
  );

  EditAdminUser = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.EditUser),
      exhaustMap((action) =>
        this.userservies.EditUserAdmin(action.id, action.EditData).pipe(
          switchMap((res) => {
            return [UserActions.AllUser(), ActionApp.SucessProccing()];
          })
        )
      )
    )
  );
}
