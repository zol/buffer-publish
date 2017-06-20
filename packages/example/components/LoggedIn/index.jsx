import React from 'react';
import PropTypes from 'prop-types';

const LoggedIn = ({ loggedIn }) =>
  <div>{ loggedIn ? 'Logged In...' : 'NOT Logged In...' }</div>;

LoggedIn.propTypes = {
  loggedIn: PropTypes.bool,
};

LoggedIn.defaultProps = {
  loggedIn: false,
};

export default LoggedIn;
