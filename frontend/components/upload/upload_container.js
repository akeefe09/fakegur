import React from 'react';
import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { closeModal } from '../../actions/modal_actions';
import { createImage } from '../../actions/image_actions';
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
    createImage: (image) => dispatch(createImage(image)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);