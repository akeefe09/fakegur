import React from 'react';
import { connect } from 'react-redux';
import CreateComment from './create_comment';
import { createComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
  return ({
    createComment: (comment) => dispatch(createComment(comment)),
  });
};

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    postId: ownProps.match.params.id,
  });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateComment));
