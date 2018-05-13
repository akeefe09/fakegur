import React from 'react';
import { Router, Route, Link} from 'react-router-dom';
import indexLink from './index_link';
import NavBar from './navbar';

const TopPart = (props) => {
  const location = window.location.href.split('#/')[1];
  switch (location) {
    case 'signup':
      return (
        <div>
          {backTo()}
        </div>
      );
    case 'login':
      return (
        <div>
          {backTo()}
        </div>
      );
    default:
      return(
        <header className='navbar-container'>
          <NavBar/>
        </header>
      );
  }
};

export default TopPart;
