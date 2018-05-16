import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import User from './user';
import { fetchUser } from '../../actions/user_actions';
import { requestAllPosts } '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const user = state.entities.users[ownProps.match.params.id];
  return {
    currentUser,
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    requestAllPosts: () => dispatch(requestAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
