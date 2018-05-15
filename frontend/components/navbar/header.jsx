import React from 'react';
import { Router, Route, Link} from 'react-router-dom';
import NavBar from './navbar';

const Header = (props) => {
  const location = window.location.href.split('#/')[1];
  switch (location) {
    case 'signup':
      return (

      );
    case 'login':
      return (

      );
    default:
      return (
        <header className='navbar-container'>
          <NavBar/>
        </header>
      );
  }
};

export default Header;
