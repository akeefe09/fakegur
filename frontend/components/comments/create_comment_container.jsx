import React from 'react';
import { connect } from 'react-redux';
import CreateComment from './create_comment';

const mapDispatchToProps = (dispatch) => {
  return ({
    createComment: (comment) => dispatch(createComment(comment)),
  });
};

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    body: ownProps.body || "",
    loggedIn: Boolean(state.session.currentUser),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
