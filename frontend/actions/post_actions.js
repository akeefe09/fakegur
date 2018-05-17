import * as PostUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_All_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const DESTROY_POST = 'DESTROY_POST';

export const receivePost = ({post, comments}) => ({
  type: RECEIVE_POST,
  post,
  comments
});

export const receiveAllPosts = ({ posts, users }) => ({
  type: RECEIVE_ALL_POSTS,
  posts,
  users,
});

export const destroyPost = (id) => ({
  type: DESTROY_POST,
  id,
});

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors,
});

export const deletePost = (id) => dispatch => {
  return PostUtil.deletePost(id).then(post =>
    dispatch(destroyPost(id)));
};

export const requestPost = (id) => dispatch => {
  return PostUtil.fetchPost(id).then(post =>
    dispatch(receivePost(post)));
};

export const requestAllPosts = () => dispatch => {
  return PostUtil.fetchPosts().then(posts =>
    dispatch(receiveAllPosts(posts)));
};

export const createPost = (post) => dispatch => {
  return PostUtil.createPost(post).then(post => {
    dispatch(receivePost(post));
  }, errors => {
    dispatch(receivePostErrors(errors.responseJSON));
  });
};

export const editPost = (post)=> {
  return PostUtil.editPost(post).then(post => {
    dispatch(editPost(post));
  });
};
