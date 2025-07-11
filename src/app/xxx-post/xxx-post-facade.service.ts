import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {XxxPost} from "./xxx-post.types";
import {XxxPostActions} from './xxx-post.actions';
import * as XxxPostSelectors from './xxx-post.selectors';

@Injectable({
  providedIn: 'root'
})
export class XxxPostFacadeService {
  private store: Store = inject(Store);
  isNoSelectedPost$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsNoSelectedPost);
  isNoSelectedUser$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsNoSelectedUser);
  isPostsEmpty$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostsEmpty);
  isPostsLoaded$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostsLoaded);
  isPostsLoading$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostsLoading);
  isSaveButtonDisabled$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsSaveButtonDisabled);
  posts$: Observable<XxxPost[]> = this.store.select(XxxPostSelectors.selectPosts);
  selectedPost$: Observable<XxxPost | undefined> = this.store.select(XxxPostSelectors.selectSelectedPost);
  selectedPostId$: Observable<number | undefined> = this.store.select(XxxPostSelectors.selectSelectedPostId);

  getUserPosts(): void {
    this.store.dispatch(XxxPostActions.getUserPosts())
  }

  selectPost(postId: number): void {
    this.store.dispatch(XxxPostActions.selectPost({postId}))
  }

  setPostForm(post: XxxPost): void {
    this.store.dispatch(XxxPostActions.setPostForm({post}))
  }

  updatePost(): void {
    this.store.dispatch(XxxPostActions.updatePost())
  }
}
