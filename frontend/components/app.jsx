import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, Hashrouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/upload_modal';
import IndexPage from './index/index_container';
import NotFoundContainer from './404/not_found_container';
import PostContainer from './posts/post_container';


const App = () => {

  return (
    <div className="source">
      <Modal />

      <Route exact path='/' component={ NavBarContainer } />
      <Switch>
        <AuthRoute exact path="/login" component={ LoginFormContainer } />
        <AuthRoute exact path="/signup" component={ SignupFormContainer } />
        <Route path="/posts/:id" component={ PostContainer } />
        <Route exact path='/' component={ IndexPage } />
        <Route component= { NotFoundContainer } />
      </Switch>

    </div>);
};

export default App;
