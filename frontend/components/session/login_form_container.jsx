import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, removeErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
