import * as PostUtil from '../util/post_api_util';

export const receiveAllPosts = (posts) => {
  return (
    type: RECEIVE_ALL_POSTS,
    posts,
  )
};

export const receivePost = (post) => ({

});
