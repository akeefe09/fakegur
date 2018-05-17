import React from 'react';
import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    formType: 'post',
    posts: state.entities.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    closeModal: () => dispatch(closeModal()),
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadForm));
