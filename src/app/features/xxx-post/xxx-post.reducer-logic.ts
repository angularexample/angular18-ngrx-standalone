import { XxxPost, xxxPostInitialState, XxxPostState } from './xxx-post.types';

export const getPosts = (state: XxxPostState) => {
  return {
    ...state,
    isPostsLoading: true,
    posts: [],
  }
}

export const getPostsError = (state: XxxPostState) => {
  return {
    ...state,
    isPostsLoading: false,
  }
}

export const getPostsSuccess = (state: XxxPostState, action: { posts: XxxPost[] }) => {
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

export const updatePostSuccess = (state: XxxPostState, action: {postResponse: XxxPost}) => {
  // remove the old post, add the new one, sort by id
  let posts= state.posts.filter(item => item.id !== action.postResponse.id);
  const updatedPost: XxxPost = {...action.postResponse};
  posts.push(updatedPost);
  posts.sort((a: XxxPost, b: XxxPost) => a.id - b.id);
  return {
    ...state,
    isPostUpdating: false,
    posts
  }
}
