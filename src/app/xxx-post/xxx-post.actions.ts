import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {XxxPost, XxxPostResponse} from "./xxx-post.types";

export const XxxPostActions = createActionGroup({
    source: 'xxxPost',
    events: {
        'getUserPosts': emptyProps(),
        'getUserPostsError': emptyProps(),
        'getUserPostsSuccess': props<{ posts: XxxPost[] }>(),
        'selectPost': props<{ postId: number }>(),
        'setPostForm': props<{ post: XxxPost }>(),
        'updatePost': emptyProps(),
        'updatePostError': emptyProps(),
        'updatePostSuccess': props<{ postResponse: XxxPostResponse }>(),
    },
});
