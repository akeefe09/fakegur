import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './post_reducer';
import commentReducer from './comment_reducer';
import voteReducer from './votes_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentReducer,
  votes: voteReducer,
});

export default entitiesReducer;
