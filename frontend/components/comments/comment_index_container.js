import CommentIndex from './comment_index';
import { connect } from 'react-redux';
import { requestAllComments } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  // const currentUser = state.entities.users[state.session.currentUser.id] || {};

  return ({
    comments: Object.values(state.entities.comments),
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    requestAllComments: (id) => dispatch(requestAllComments(id)),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
