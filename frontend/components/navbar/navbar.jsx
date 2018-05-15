import React from 'react';
import MenuLeftDropdown from './menu_left_dropdown';
import RightNav from './links_right_nav';
// import UploadButton from './upload_button';

const NavBar = () => {
  return (
  <div className='navbar-main'>
    <nav className='nav-left'>
      <div className='dropdown-left'>
        <a href='/' className='hover-link'>
          <div className='logo-link'>
          </div>
        </a>
        <MenuLeftDropdown className='hover-link'/>
      </div>
        <UploadButton/>
      </nav>
        <div className='nav-right'>
          <LeftSide/>
        </div>
  </div>
);};

export default NavBar;
