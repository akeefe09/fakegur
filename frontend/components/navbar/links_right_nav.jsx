import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link} from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import RightDropDown from './right_drop';

const RightNav = ({ loggedIn, logout, user }) => {
  if (!loggedIn) {
    return (
      <ul className='user-nav'>
        <li className="signin-nav-link">
          <Link to='/login' className='navlink-btn'> sign in </Link>
        </li>
        <li className='signin-nav-link'>
          <Link to='/signup' className='navlink-btn'> sign up </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <RightDropDown />
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
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightNav);
