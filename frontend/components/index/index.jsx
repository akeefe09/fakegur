import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

class IndexPage extends React.Component {
  componentDidMount() {
    this.props.requestAllPosts();
  }

  render() {
    if (isEmpty(this.props.posts)) return null;
    let allPosts = [];
    allPosts = this.props.images.slice().map(img => {
      return (
        <div key={img.id} className="index-item">
          <div className="index-item-title">{img.title}</div>
          <Link className="index-item-link" to={`/posts/${img.id}`}>
            <img className="index-item-img" src={img.image_url}/>
          </Link>
        </div>
      )
    });
    
    return (
      <div className="main-gallery">
        <ul>
          { allPosts }
        </ul>
      </div>
    )

  }

}

export default IndexPage;
