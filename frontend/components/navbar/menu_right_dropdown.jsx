import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

const RightDropDown = ({ clearDropdowns }) => (
  <div className="dropdown-list-right" onClick={(event) => event.stopPropagation()} >
    <li onClick={ ()=> logout()}>
      <Link to='/' className='dropdown-right'>
        Logout
      </Link>
    </li>
    <li>
      <Link to={`/users/${user.id}`}
        className='dropdown-right'> {user.username}
      </Link>
    </li>
  </div>
);

export default RightDropDown;
