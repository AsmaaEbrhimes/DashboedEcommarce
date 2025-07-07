import {createAction, props} from "@ngrx/store"

export const AllUser=createAction(
  '[Users] Get All Users'
)

export const LoadUsersFromLocalStorage = createAction(
  '[Users] Load Users From LocalStorage',
  props<{ users: any[] }>()
);


export const AddUser = createAction(
  '[Users] AddUser',
  props<{ addData: any[] }>()
);


export const EditUser = createAction(
  '[Users] EditUser',
  props<{id: number; EditData: any[] }>()
);


export const DeleteUser = createAction(
  '[Users] DeleteUser',
  props<{id:string}>()
);
