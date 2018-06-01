import merge from 'lodash/merge';

import {
  RECEIVE_POST
} from '../actions/post_actions';

const votesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST:
      if (action.votes) {
        return merge({}, state, action.votes)
      } else {
        return state;
      }
    // case REMOVE_VOTE:
    //   let newState = merge({}, state);
    //   delete newState[action.id];
    //   return newState;
    default:
      return state;
  }
}

export default votesReducer;
