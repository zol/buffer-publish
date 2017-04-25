import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import {
  ConnectedRouter,
} from 'react-router-redux';
import '@bufferapp/components/variables.css';
import { Provider } from 'react-redux';
import createStore, { history } from '@bufferapp/store';
import LoginForm from '@bufferapp/login';

import App from './components/App';


ReactDOM.render(
  <Provider store={createStore()}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path={'/'} component={App} />
        <Route path={'/login'} component={LoginForm} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
