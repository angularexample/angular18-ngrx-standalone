import {createReducer, on} from '@ngrx/store';
import * as XxxContentActions from './xxx-content.actions';
import {xxxContentInitialState} from "./xxx-content.types";
import * as XxxContentReducers from './xxx-content.reducer-logic';

export const xxxContentReducer = createReducer(
  xxxContentInitialState,
  on(XxxContentActions.getContent, XxxContentReducers.xxxGeContent),
  on(XxxContentActions.getContentError, XxxContentReducers.xxxGetContentError),
  on(XxxContentActions.getContentSuccess, XxxContentReducers.xxxGetContentSuccess),
);
