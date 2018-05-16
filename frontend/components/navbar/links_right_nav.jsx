import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link} from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const RightNav = ({ loggedIn, logout, user, openModal }) => {
  if (!loggedIn) {
    return (
      <ul className='user-nav'>
        <li className="navbar-link">
          <Link to='/login' className='navlink-btn'> sign in </Link>
        </li>

        <li className='navbar-link'>
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
          <span className="upload-button-text">New post
          </span>
        </li>

        <li className="navbar-link" onClick={ ()=> logout()}>
          <Link to='/' className='navlink-btn'> Logout </Link>
        </li>

        <li className="navbar-link">
          <Link to={`/users/${user.id}`}
            className='navlink-btn'> {user.username} </Link>
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
