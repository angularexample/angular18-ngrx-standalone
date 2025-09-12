import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { XxxPost } from './xxx-post.types';
import { XxxPostActions } from './xxx-post.actions';
import * as XxxPostSelectors from './xxx-post.selectors';

@Injectable({
  providedIn: 'root'
})
export class XxxPostFacadeService {
  private store: Store = inject(Store);
  readonly isNoSelectedPost$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsNoSelectedPost);
  readonly isNoSelectedUser$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsNoSelectedUser);
  readonly isPostsEmpty$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostsEmpty);
  readonly isPostsLoaded$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostsLoaded);
  readonly isPostsLoading$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostsLoading);
  readonly isSaveButtonDisabled$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsSaveButtonDisabled);
  readonly posts$: Observable<XxxPost[]> = this.store.select(XxxPostSelectors.selectPosts);
  readonly selectedPost$: Observable<XxxPost | undefined> = this.store.select(XxxPostSelectors.selectSelectedPost);
  readonly selectedPostId$: Observable<number | undefined> = this.store.select(XxxPostSelectors.selectSelectedPostId);
  readonly selectedUserId$: Observable<number | undefined> = this.store.select(XxxPostSelectors.selectSelectedUserId);

  setPostForm(post: XxxPost): void {
    this.store.dispatch(XxxPostActions.setPostForm({post}))
  }

  setSelectedPost(postId: number): void {
    this.store.dispatch(XxxPostActions.setSelectedPost({postId}))
  }

  showUserPosts(): void {
    this.store.dispatch(XxxPostActions.showUserPosts())
  }

  updatePost(): void {
    this.store.dispatch(XxxPostActions.updatePost())
  }
}
