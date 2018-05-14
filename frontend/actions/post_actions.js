import * as PostUtil from '../util/post_api_util';

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts,
});
