import React from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchPost } from '../../post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.entities.posts[]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: id => dispatch(deletePost(id)),
    fetchPost: id => dispatch(fetchPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
