import React from 'react';
import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    formType: 'post',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    closeModal: () => dispatch(closeModal()),
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
