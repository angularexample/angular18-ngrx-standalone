import {createReducer, on} from '@ngrx/store';
import * as XxxUserActions from './xxx-user.actions';
import {xxxUserInitialState} from "./xxx-user.types";
import {xxxGetUsers, xxxGetUsersError, xxxGetUsersSuccess, xxxSelectUser} from "./xxx-user.reducer-logic";


export const xxxUserReducer = createReducer(
  xxxUserInitialState,
  on(XxxUserActions.getUsers, xxxGetUsers),
  on(XxxUserActions.getUsersError, xxxGetUsersError),
  on(XxxUserActions.getUsersSuccess, xxxGetUsersSuccess),
  on(XxxUserActions.selectUser, xxxSelectUser)
);
