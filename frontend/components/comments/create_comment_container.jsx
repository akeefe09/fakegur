import React from 'react';
import { connect } from 'react-redux';
import CreateComment from './create_comment';

const mapDispatchToProps = (dispatch) => {
  return ({
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id))
  });
};

const mapStateToProps = (post) => {
  return ({
    
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
