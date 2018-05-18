import { merge } from 'lodash';

import {
  RECEIVE_POST,
  RECEIVE_ALL_POSTS,
  DELETE_POST
} from '../actions/post_actions';

const PostReducer = (state = {}, action) => {
  const newState = Object.assign({}, state);
  // console.log('all state', state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post});
    case DELETE_POST:
    //console.log('newState.entiessss befor', state);
      delete newState.entities[action.id];
    //  console.log('newState.entiessss', newState.entities);
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
