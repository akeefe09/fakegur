import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link} from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload';

// <Link to={`/users/${user.id}`}
//   className='navlink-btn'> {user.username}
// </Link>

const RightNav = ({ loggedIn, logout, user, openModal }) => {
  if (!loggedIn) {
    return (
      <ul className='user-nav'>
        <li className="navbar-link sign-in-l">
          <Link to='/login' className='navlink-btn'> sign in </Link>
        </li>

        <li className='navbar-link sign-up-l'>
          <Link to='/signup' className='navlink-btn'> sign up </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className='user-nav'>

        <li className="upload-btn" onClick={openModal.bind(this, 'upload')}>
          <span className="icon-upload">
          </span>
          <span className="upload-button-text">
            <FaCloudUpload className="upload-fa"/>New post
          </span>
        </li>

        <li className="navbar-link logout-l" onClick={ () => logout() }>
          <Link to='/' className='navlink-btn'> Logout </Link>
        </li>

        <li className="user-nav-name">
          <div className='navlink-btn nav-user'> {user.username}
          </div>
        </li>
      </ul>

    );
  }
};

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    user: session.currentUser,
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightNav);
