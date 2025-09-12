import { XxxPost, xxxPostInitialState, XxxPostState } from './xxx-post.types';

export const getUserPosts = (state: XxxPostState) => {
  return {
    ...state,
    isPostsLoading: true,
    posts: [],
  }
}

export const getUserPostsError = (state: XxxPostState) => {
  return {
    ...state,
    isPostsLoading: false,
  }
}

export const getUserPostsSuccess = (state: XxxPostState, action: { posts: XxxPost[] }) => {
  const posts: XxxPost[] = <XxxPost[]>JSON.parse(JSON.stringify(action.posts));
  return {
    ...state,
    isPostsLoading: false,
    posts,
  }
}

export const setSelectedPost = (state: XxxPostState, action: { postId: number }) => {
  let newState: XxxPostState = {
    ...state
  };
  // make sure the selected post exists
  if (state.posts.some((item: XxxPost): boolean => item.id === action.postId)) {
    newState.selectedPostId = action.postId
  }
  return newState;
}

export const setSelectedUser = (_state: XxxPostState, action: {userId: number}) => {
  return {
    ...xxxPostInitialState,
    selectedUserId: action.userId,
  }
}

export const setPostForm = (state: XxxPostState, action: { post: XxxPost }) => {
  const postForm: XxxPost = <XxxPost>JSON.parse(JSON.stringify(action.post));
  return {
    ...state,
    postForm
  }
}

export const updatePost = (state: XxxPostState) => {
  return {
    ...state,
    isPostUpdating: true,
  }
}

export const updatePostError = (state: XxxPostState) => {
  return {
    ...state,
    isPostUpdating: false,
  }
}

export const updatePostSuccess = (state: XxxPostState) => {
  return {
    ...state,
    isPostUpdating: false,
  }
}
