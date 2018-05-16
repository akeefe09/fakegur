import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, Hashrouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/upload_modal';
import IndexPage from './index/index_container';


const App = () => {

  return (
    <div className="source">
      <Modal />

      <Route exact path='/' component={ NavBarContainer } />
      <Switch>
        <Route exact path={`/`} component={ IndexPage }/>
        <AuthRoute exact path="/login" component={ LoginFormContainer } />
        <AuthRoute exact path="/signup" component={ SignupFormContainer } />
      </Switch>

    </div>);
};

export default App;
