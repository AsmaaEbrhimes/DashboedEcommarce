import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../Reducser/user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);
