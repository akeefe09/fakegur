import { merge } from 'lodash';

import {
  RECEIVE_POST,
  RECEIVE_ALL_POSTS,
  DELETE_POST
} from '../actions/post_actions';

import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const PostReducer = (state = {}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.payload.posts);
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post});
    case DELETE_POST:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
