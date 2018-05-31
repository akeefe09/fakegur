import * as VoteUtil from '../util/vote_api_util';
import receivePost from './post_actions';
import receiveComment from './comment_actions';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_All_POSTS';
export const RECEIVE_VOTE_ERRORS = 'RECEIVE_VOTE_ERRORS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const deleteVote = params => dispatch => {
  let type;
  if (params.votable_type === 'Post') {
    type = receivePost;
  } else {
    type = receiveComment;
  }
  return VoteUtil.deleteVote(params).then(voted => {
    dispatch(type(voted));
  });
};

export const createVote = vote => dispatch => {
  let type;
  if (params.votable_type === 'Post') {
    type = receivePost;
  } else {
    type = receiveComment;
  }
  return VoteUtil.createVote(vote).then(voted => {
    dispatch(action(voted));
    return voted;
  });
};
