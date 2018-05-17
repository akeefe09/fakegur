import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return({
    currentComment: state.entities.comments[ownProps.id];
    currentUser: state.session.currentUser,
    state.entities.posts[]
    author: state.entities.users[currentComment.user_id]
  });
}


const mapDispatchToProps = (dispatch) => {
  return({
    requestComment: id => dispatch(requestComment(id))
  });
}

export default connect(mapDispatchToProps, mapStateToProps)(Comment);
