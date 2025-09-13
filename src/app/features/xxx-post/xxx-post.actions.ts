import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { XxxPost, xxxPostFeatureName } from './xxx-post.types';

export const XxxPostActions = createActionGroup({
  source: xxxPostFeatureName,
  events: {
    'getPosts': emptyProps(),
    'getPostsError': emptyProps(),
    'getPostsSuccess': props<{ posts: XxxPost[] }>(),
    'setPostForm': props<{ post: XxxPost }>(),
    'setSelectedPost': props<{ postId: number }>(),
    'setSelectedUser': props<{ userId: number }>(),
    'showPosts': emptyProps(),
    'updatePost': emptyProps(),
    'updatePostError': emptyProps(),
    'updatePostSuccess': props<{ postResponse: XxxPost }>(),
  },
});
