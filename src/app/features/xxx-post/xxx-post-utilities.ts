import { XxxPost } from './xxx-post.types';

export const isPostsEqual = (post1: XxxPost | undefined, post2: XxxPost | undefined) => {
  if (!post1 || !post2) {
    return false;
  }
  return (post1.id === post2.id
    && post1.userId === post2.userId
    && post1.body === post2.body
    && post1.title === post2.title);
}
