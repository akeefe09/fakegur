import React from 'react';
import { connect } from 'react-redux';
import { deletePost, requestPost } from '../../actions/post_actions';
import Post from './post';
import { createVote } from '../../actions/vote_actions';

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  let totalVotes = 0;
  let votes = state.entities.votes;
  for (let key in state.entities.votes) {
    if (votes[key].votable_id === state.entities.posts[postId] &&
    votes[key].votable_type === "Post") {
      totalVotes += votes[key].value;
    }
  }
  let author = {};

  if(state.entities.posts[postId]) {
    author = state.entities.users[(state.entities.posts[postId].user_id)]
  }
  debugger
  return ({
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    post: state.entities.posts[postId],
    postId,
    totalVotes,
    author
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: id => dispatch(deletePost(id)),
    fetchPost: id => dispatch(requestPost(id)),
    createVote: vote => dispatch(createVote(vote)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
