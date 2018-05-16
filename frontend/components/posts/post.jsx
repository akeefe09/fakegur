import React from 'react';
import { Link } from 'react-router-dom';
import PostContainer from './post_container';

class Post extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  render() {
    const post = this.props.post;
    return (
      <div className="post-div">
        <div className="post-title">{post.title}</div>

        <div className="post-user">
          <Link to={`/users/${this.props.user.id}`}>
            {this.props.user.username}
          </Link>
        </div>

        <div className="post-image">
          <img src={post.image_url} />
        </div>

        <div className="post-description">
          <p>
            {this.props.post.description}
          </p>
        </div>

      </div>
    );
  }

}

export default Post;
