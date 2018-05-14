import React from 'react';
import { Router, Route, Link} from 'react-router-dom';
import indexLink from './index_link';
import NavBar from './navbar';

const Header = (props) => {
  const location = window.location.href.split('#/')[1];
  switch (location) {
    case 'signup':
      return (
        <div>

        </div>
      );
    case 'login':
      return (
        <div>
          
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

export default Header;
