import React from 'react';
import { Link } from 'react-router-dom';

const IndexItem = ({id, image_url, title}) => {
  return (
    <div className="main-index-item">
      <div className="index-item-title">{title}</div>
      <Link className="index-item-link" to={`/posts/${id}`}>
        <img className="index-item-img" src={image_url}/>
      </Link>
    </div>
  );
}

export default IndexItem;
