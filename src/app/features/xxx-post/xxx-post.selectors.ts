import { createFeatureSelector, createSelector } from '@ngrx/store';
import { isPostsEqual } from './xxx-post-utilities';
import { XxxPost, xxxPostFeatureName, XxxPostState } from './xxx-post.types';

export const selectPostState = createFeatureSelector<XxxPostState>(xxxPostFeatureName);

export const selectIsPostsLoading = createSelector(
  selectPostState,
  (state: XxxPostState) => state.isPostsLoading
);

export const selectIsPostUpdating = createSelector(
  selectPostState,
  (state: XxxPostState) => state.isPostUpdating
);

export const selectPostForm = createSelector(
  selectPostState,
  (state: XxxPostState) => state.postForm
)

export const selectPosts = createSelector(
  selectPostState,
  (state: XxxPostState) => state.posts
)

export const selectSelectedPostId = createSelector(
  selectPostState,
  (state: XxxPostState) => state.selectedPostId
)

export const selectSelectedUserId = createSelector(
  selectPostState,
  (state: XxxPostState) => state.selectedUserId
)

export const selectIsPostsEmpty = createSelector(
  selectIsPostsLoading,
  selectPosts,
  (isLoading: boolean, posts: XxxPost[]) => !isLoading && posts && posts.length === 0
);

export const selectIsPostsLoaded = createSelector(
  selectIsPostsLoading,
  selectPosts,
  (isLoading: boolean, posts: XxxPost[]) => !isLoading && posts && posts.length > 0
);

export const selectSelectedPost = createSelector(
  selectPosts,
  selectSelectedPostId,
  (posts: XxxPost[], postId: number | undefined) => {
    let post: XxxPost | undefined = undefined;
    if (postId !== undefined && posts.length > 0) {
      post = posts.find(item => item.id === postId);
    }
    return post;
  }
);

export const selectIsSaveButtonDisabled = createSelector(
  selectIsPostUpdating,
  selectIsPostsLoaded,
  selectSelectedPost,
  selectPostForm,
  (isPostUpdating: boolean, isPostsLoaded: boolean, selectedPost: XxxPost | undefined, postForm: XxxPost | undefined) => {
    const isPostFormEqual: boolean = isPostsEqual(selectedPost, postForm);
    return isPostUpdating || !isPostsLoaded || (selectedPost === undefined) || (postForm === undefined) || isPostFormEqual;
  }
);

export const selectIsNoSelectedPost = createSelector(
  selectPostState,
  (state: XxxPostState) => state.selectedPostId === undefined
);

export const selectIsNoSelectedUser = createSelector(
  selectSelectedUserId,
  (selectedUserId) => selectedUserId === undefined
);
