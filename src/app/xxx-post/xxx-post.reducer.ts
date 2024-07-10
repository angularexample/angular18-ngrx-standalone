import {createReducer, on} from '@ngrx/store';
import * as XxxPostActions from './xxx-post.actions';
import {xxxPostInitialState} from "./xxx-post.types";
import * as XxxPostReducerLogic from "./xxx-post.reducer-logic";


export const xxxPostReducer = createReducer(
  xxxPostInitialState,
  on(XxxPostActions.getUserPosts, XxxPostReducerLogic.xxxGetUserPosts),
  on(XxxPostActions.getUserPostsError, XxxPostReducerLogic.xxxGetUserPostsError),
  on(XxxPostActions.getUserPostsSuccess, XxxPostReducerLogic.xxxGetUserPostsSuccess),
  on(XxxPostActions.selectPost, XxxPostReducerLogic.xxxSelectPost),
  on(XxxPostActions.setPostForm, XxxPostReducerLogic.xxxSetPostForm),
  on(XxxPostActions.updatePost, XxxPostReducerLogic.xxxUpdatePost),
  on(XxxPostActions.updatePostError, XxxPostReducerLogic.xxxUpdatePostError),
  on(XxxPostActions.updatePostSuccess, XxxPostReducerLogic.xxxUpdatePostSuccess),
  );
