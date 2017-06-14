import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import {
  ConnectedRouter as Router,
} from 'react-router-redux';
import { Provider } from 'react-redux';
import createStore, { history } from '@bufferapp/store';
import App from './components/App';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          path={'/'}
          component={App}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
