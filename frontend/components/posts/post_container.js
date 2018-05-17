import React from 'react';
import { connect } from 'react-redux';
import { deletePost, requestPost } from '../../actions/post_actions';
import Post from './post';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    post: state.entities.posts.post,
    postId: ownProps.match.params.id,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: id => dispatch(deletePost(id)),
    fetchPost: id => dispatch(requestPost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
