import { createReducer, on } from '@ngrx/store';
import { XxxPostActions } from './xxx-post.actions';
import { xxxPostInitialState } from './xxx-post.types';
import * as XxxPostReducerLogic from './xxx-post.reducer-logic';

export const xxxPostReducer = createReducer(
  xxxPostInitialState,
  on(XxxPostActions.getPosts, XxxPostReducerLogic.getPosts),
  on(XxxPostActions.getPostsError, XxxPostReducerLogic.getPostsError),
  on(XxxPostActions.getPostsSuccess, XxxPostReducerLogic.getPostsSuccess),
  on(XxxPostActions.setPostForm, XxxPostReducerLogic.setPostForm),
  on(XxxPostActions.setSelectedPost, XxxPostReducerLogic.setSelectedPost),
  on(XxxPostActions.setSelectedUser, XxxPostReducerLogic.setSelectedUser),
  on(XxxPostActions.updatePost, XxxPostReducerLogic.updatePost),
  on(XxxPostActions.updatePostError, XxxPostReducerLogic.updatePostError),
  on(XxxPostActions.updatePostSuccess, XxxPostReducerLogic.updatePostSuccess),
);
