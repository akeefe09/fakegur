import React from 'react';
import { connect } from 'react-redux';
import { deletePost, requestPost } from '../../actions/post_actions';
import CommentItem from './comment_item';
import { createVote } from '../../actions/vote_actions';

const mapStateToProps = (state, ownProps) => {
  const postId = parseInt(ownProps.match.params.id);
  let totalVotes = 1;
  let votes = state.entities.votes;
  for (let key in votes) {
    if (votes[key].votable_id === postId && votes[key].votable_type === "Post") {
      totalVotes += 1;
    }
  }

  let votedUsers = [];
  for (let key in state.entities.votes) {
    votedUsers.push(votes[key].user_id);
  }

  let author = {};

  if (state.entities.posts[postId] && state.entities.users[(state.entities.posts[postId].user_id)]) {
    author = state.entities.users[(state.entities.posts[postId].user_id)]
  }

  return ({
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    post: state.entities.posts[postId],
    postId,
    totalVotes,
    author,
    votedUsers,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createVote: vote => dispatch(createVote(vote)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
