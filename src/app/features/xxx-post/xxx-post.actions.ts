import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { XxxPost, xxxPostFeatureName, XxxPostResponse } from './xxx-post.types';

export const XxxPostActions = createActionGroup({
  source: xxxPostFeatureName,
  events: {
    'getUserPosts': emptyProps(),
    'getUserPostsError': emptyProps(),
    'getUserPostsSuccess': props<{ posts: XxxPost[] }>(),
    'setPostForm': props<{ post: XxxPost }>(),
    'setSelectedPost': props<{ postId: number }>(),
    'setSelectedUser': props<{ userId: number }>(),
    'showUserPosts': emptyProps(),
    'updatePost': emptyProps(),
    'updatePostError': emptyProps(),
    'updatePostSuccess': props<{ postResponse: XxxPostResponse }>(),
  },
});
