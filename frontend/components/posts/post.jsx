import React from 'react';
import { Link } from 'react-router-dom';
import PostContainer from './post_container';
import NavBar from '../navbar/navbar';

class Post extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  render() {
    const post = this.props.post;
    return (
      <div className="post-div">
        {post ? (
          <div>
            <header className='navbar-container'>
              <NavBar/>
            </header>
                <div className="post-title">{post.title}</div>

                <div className="post-user">
                  <Link to={`/users/${post.user_id}`}>
                    {post.user_id}
                  </Link>
                </div>

                <div className="post-image">
                  <img src={post.image_url} />
                </div>

                <div className="post-description">
                  <p>
                    {post.description}
                  </p>
                  {post.user_id === this.props.currentUser.id ?
                    <button onClick={() => this.props.deletePost(post.id)} className='deleteButton'>
                      Delete Post
                    </button> : null}
                </div>
              </div>) : <h1>Loading....</h1>}
      </div>
    );
  }

}

export default Post;
