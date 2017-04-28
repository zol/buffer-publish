import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router';
import {
  ConnectedRouter as Router,
} from 'react-router-redux';
import '@bufferapp/components/variables.css';
import { Provider } from 'react-redux';
import createStore, { history } from '@bufferapp/store';
import LoginForm, { loggedIn } from '@bufferapp/login';
import App from './components/App';

ReactDOM.render(
  <Provider store={createStore()}>
    <Router history={history}>
      <Switch>
        <Route path={'/login'} component={LoginForm} />
        <Route
          path={'/'}
          render={() => {
            if (loggedIn()) {
              return (<App />);
            }
            return (<Redirect to={'/login'} />);
          }}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
