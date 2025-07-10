import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../Types/typesUser';

export interface UserState {
  users: any[];
}

const initialState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.LoadUsersFromLocalStorage, (state, { users }) => ({
    ...state,
    users
  }))
);
