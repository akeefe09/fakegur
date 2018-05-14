import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import values from 'lodash/values'
import { selectAllPosts } from '../../reducers/selectors';
import { requestPost } from '../../actions/post_actions';
import ImagesShow from './images_show';

class PostInfo extends React.Component {
  constructor(props){
    super(props);

  }

  socialIcons() {
    return (
      <div className="post-info-icons">

      </div>
    )
  }

  render() {
    let showPics = null;
    if (this.props.post.images) {
      showPics = this.props.post.images.map((image) => {
        <ImagesShow />
      })
    }
    return(
      <div className="show-page">
        <div className='post-container'>
          <div className='post-header'>

            <div className='header-left'>
              <h2 className='post-title'>{this.props.post.title}</h2>
              <div className='post-user-link'>
                by
                <Link to={`/users/${this.props.post.user_id}`}>
                  {this.props.post.user_name}
                </Link>
              </div>
            </div>

            <div className="header-alt">

            </div>

            {showPics}

            <div className='post-info'>
              <div className='post-description'>
                {this.props.post.description}
              </div>

              <div className='post-votes'>
                <div classname='upvote-arrow'></div>

                <div className='downvote-arrow'></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

};

const mapStateToProps = (state, ownProps) => {
  return {
    postId: ownProps.post.id,
    posts: selectAllPosts(state.post.entities),
    loggedIn: Boolean(state.session.currentUser),
  };

const mapDispatchToProps = (dispatch) => {
  return {
    requestPost: (id) => dispatch(requestPost(id)),

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostInfo));
