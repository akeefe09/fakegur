import React from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchPost } from '../../actions/post_actions';
import Post from './post';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    post: state.entities.posts[ownProps.match.params.id],
    postId: ownProps.match.params.id,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: id => dispatch(deletePost(id)),
    fetchPost: id => dispatch(fetchPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
