import { connect } from 'react-redux';

const mapStateToProps =


const mapDispatchToProps = (dispatch) => {
  return({
    requestComment: id => dispatch(requestComment(id))
  })
}

export default connect(mapDispatchToProps, mapStateToProps)(Comment);
