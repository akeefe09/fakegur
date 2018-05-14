import React from  'react';
import { connect } from 'react-redux';

const ImagesShow = (props) => {
  return (
    <div key={props.image.id} className='post-album'>
      <img src={props.image.image_url} className='image-item'/>
    </div>
  )
};
