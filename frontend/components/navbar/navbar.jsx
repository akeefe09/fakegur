import React from 'react';
import RightNav from './links_right_nav';

const NavBar = () => {
  return (
  <div className='navbar-main'>
    <nav className='nav-left'>
      <div className='dropdown-left'>
        <a href='/' className='hover-link'>
          <div className='logo-link'>
          </div>
        </a>

      </div>

      </nav>
        <div className='nav-right'>
          <RightNav />
        </div>
  </div>
);};

export default NavBar;
