import * as PostUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_All_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const DELETE_POST = 'DELETE_POST';

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post,
});

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors,
});

export const requestPost = (id) => dispatch => {
  return PostUtil.fetchPost(id).then(post =>
    dispatch(receivePost(post)));
};

export const requestAllPosts = () => dispatch => {
  return PostUtil.fetchPosts().then(posts =>
    dispatch(receiveAllPosts(posts)));
};

export const createPost = (post) => dispatch => (
  PostUtil.createPost(post).then(post => {
    dispatch(receivePost(post));
    return post;
  }).fail(err => dispatch(receivePostErrors(err.responseJSON)))
);

export const deletePost = (id) => dispatch => (
  PostUtil.deletePost(id).then(post => {
    dispatch(deletePost(post));
  }).fail(err => dispatch(receivePostErrors(err.responseJSON)))
);

export const editPost = (post) => (
  PostUtil.editPost(post).then(post => (
    dispatch(receivePost(post))
  ));
);
