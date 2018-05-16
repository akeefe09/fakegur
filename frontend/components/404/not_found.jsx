import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found-div">
        <div className="back-to-link">
          <img className="back-to-img" src={window.backTo}/>
          <Link className="back-link" to="/">back to fakegur</Link>
        </div>
        <div className="not-found-show">
          <h1 className="four-text">404 NOT FOUND</h1>
          <div className="four-gif">
            <div>Sorry</div>
            <img src="https://i.imgur.com/OKeoRPa.gif" />
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
