import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as SessionActions from './actions/session_actions';
import * as PostActions from './actions/post_actions';
import * as UserActions from './actions/user_actions';

import { RECEIVE_CURRENT_USER } from './actions/session_actions';
window.RECEIVE_CURRENT_USER = RECEIVE_CURRENT_USER;

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
