export interface XxxPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface XxxPostResponse {
  id: number;
}

export const xxxPostFeatureName = 'xxxPost';

export const xxxPostFormDataInitial: XxxPost = {
  body: '',
  id: 0,
  title: '',
  userId: 0,
};

export const xxxPostInitialState: XxxPostState = {
  isPostsLoading: false,
  isPostUpdating: false,
  posts: [],
};

export interface XxxPostState {
  isPostsLoading: boolean;
  isPostUpdating: boolean;
  postForm?: XxxPost;
  posts: XxxPost[];
  selectedPostId?: number;
}
