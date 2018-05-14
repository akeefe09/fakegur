import { merge } from 'lodash';

import {
  RECEIVE_POST,
  RECEIVE_ALL_POSTS,
  DELETE_POST
} from '../actions/post_actions';

const oldState = () => ({
  entities: {},
  currentPost: null,
});

const PostReducer = (state = oldState(), action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, state, {
        entities: action.posts
      });
    case RECEIVE_POST:
      return merge({}, state, {
        entities: {
          [action.post.id]: action.post
        },
        currentPost: action.post.id
      });
    case DELETE_POST:
      delete newState.entities[action.post.id];
      return newState;
    default:
      return state;

  }
};

export default PostReducer;
