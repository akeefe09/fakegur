import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import FaClockO from 'react-icons/lib/fa/clock-o';
import FaRandom from 'react-icons/lib/fa/random';

class IndexPage extends React.Component {
  componentDidMount() {
    this.props.requestAllPosts();
  }

  render() {
    if (isEmpty(this.props.posts)) return null;
    let allPosts = [];
    allPosts = this.props.images.slice().map((img, index) => {
      return (
        <div key={img.id} className="index-item">
          <Link className="index-item-link" to={`/posts/${img.id}`}>
            <img className="index-item-img" src={img.image_url}/>
          </Link>
          <div className="index-item-title">{img.title}</div>
        </div>
      )
    });

    // <FaClockO className="clock"/>
    // <FaRandom className="shuffle"/>

    return (
      <div className="main-gallery-outside">
        <div className="top-sentence">
          <span className="before-text">
            The Most Viral Images on the Internet, sorted by popularity
          </span>
          <div className="sort-icons">

          </div>
          <div className="gallery-message">Today's most popular posts.</div>
        </div>

        <div className="index-panel">
          <div className="imageList">
            <div className="index-posts">
              <div className="image-cards">
                { allPosts }
              </div>
            </div>

          </div>
        </div>

      </div>
    )

  }

}

export default IndexPage;
