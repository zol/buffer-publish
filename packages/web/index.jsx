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
import { actions } from '@bufferapp/pending-updates';
import App from './components/App';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path={'/login'} component={LoginForm} />
        <Route
          path={'/'}
          render={() => {
            if (loggedIn()) {
              // TODO: temporarily grab a profile with updates
              store.dispatch(actions.fetchPendingUpdates({
                profileId: '5900c42aec94e001008b456d',
              }));
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
