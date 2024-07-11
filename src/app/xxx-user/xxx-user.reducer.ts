import {createReducer, on} from '@ngrx/store';
import {XxxUserActions} from './xxx-user.actions';
import {xxxUserInitialState} from "./xxx-user.types";
import * as XxxUserReducers from "./xxx-user.reducer-logic";

export const xxxUserReducer = createReducer(
    xxxUserInitialState,
    on(XxxUserActions.getUsers, XxxUserReducers.getUsers),
    on(XxxUserActions.getUsersError, XxxUserReducers.getUsersError),
    on(XxxUserActions.getUsersSuccess, XxxUserReducers.getUsersSuccess),
    on(XxxUserActions.selectUser, XxxUserReducers.selectUser)
);
