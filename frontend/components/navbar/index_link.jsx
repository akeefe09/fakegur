import React from 'react';
import { Link } from 'react-router-dom';

const indexLink = () => {
  <div id="back-to-fakegur">
    <img src={window.images.backto} />
    <Link to="/">back to fakegur</Link>
  </div>
};

export default indexLink;
