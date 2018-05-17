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
        <header className='navbar-container'>
          <NavBar/>
        </header>
        {post ? (
        <div className="whole-container">
          <div className="post-container-main">
            <div className="post-box">
              <div className="post-header">
                <div className="title-container">
                    <div className="post-title">{post.title}</div>

                    <div className="post-user">
                      <span className="by">by</span>
                      <Link to={`/users/${post.user_id}`}>
                        {post.user_id}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="post-image">
                  <div className="post-image-container">
                    <div className="post-image-img">
                      <img className="img-s" src={post.image_url} />
                    </div>
                  </div>
                </div>

                <div className="description-footer">
                  <div>
                    <div className="description">
                    {post.description}
                    </div>
                    <span></span>
                  </div>
                </div>

                <div className="empty-div"></div>

                <div className="post-footer">
                  <div className="post-stuff">
                    <div className="post-icons">
                      <button className="upvote-button">
                      </button>
                      <button className="downvote-button">
                      </button>
                      <button className="favorite-button">
                      </button>

                      <div className="post-actions-right">
                        <span className="ellipses">...</span>
                          <div className="post-actions-right-dropdown">
                            <div className>
                              {post.user_id === this.props.currentUser.id ?
                                <div onClick={() => this.props.deletePost(post.id)} className='deleteButton'>
                                  Delete Post
                                </div> : null}
                            </div>
                          </div>
                        </div>

                        <div className="social-icons-right">
                          <span className="social-icon icon-f">
                            <a href="http://www.facebook.com/" />
                          </span>
                          <span className="social-icon icon-twt">
                            <a href="https://twitter.com/" />
                          </span>
                          <span className="social-icon icon-pin">
                            <a href="http://pinterest.com/" />
                          </span>
                          <span className="social-icon icon-red">
                            <a href="http://www.reddit.com/" />
                          </span>
                        </div>
                      </div>
                      <div className="post-data-footer">
                        <span className="post-stats">
                          <span className="stats-points">7 points</span>
                          <span className="stats-views">22 views</span>
                        </span>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <div>
            </div>

          </div>
            ) : <h1>Loading....</h1>}
      </div>
    );
  }

}

export default Post;
