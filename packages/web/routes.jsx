import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import {
  ConnectedRouter as Router,
} from 'react-router-redux';
import App from './components/App';

const Routes = ({
  history,
}) =>
  <Router history={history}>
    <Switch>
      <Route
        path={'/'}
        component={App}
      />
    </Switch>
  </Router>;

Routes.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      hash: PropTypes.string,
    }),
  }).isRequired,
};

export default Routes;
