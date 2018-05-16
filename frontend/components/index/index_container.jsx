import { connect } from 'react-redux';
import { requestAllPosts } from '../../actions/post_actions';
import IndexPage from './index';

const mapStateToProps = (state) => {
  return ({
    posts: state.entities.posts,
    images: Object.values(state.entities.posts),
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestAllPosts: () => dispatch(requestAllPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
