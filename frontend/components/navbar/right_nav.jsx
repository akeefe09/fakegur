import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link} from 'react-router-dom';
import UserDropDown from './user_drop_down';

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

const RightNav = ({ logout, user, loggedIn }) => {
  if (!loggedIn) {
    return (
      <ul className='login-options'>

        <li className="nav-link">
          <Link to='/login' className='login-link'>sign in</Link>
        </li>

        <li className="nav-link">
          <Link to='/signup' className='login-link'>sign up</Link>
        </li>

      </ul>
    );
  } else {
    return (
      <ul className='login-options'>

        <li className="nav-link" onClick={ ()=> logout()}>
          <Link to='/' className='login-link'>logout</Link>
        </li>

      </ul>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RightNav);
