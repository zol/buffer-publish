import React from 'react';
import PropTypes from 'prop-types';

const LoggedIn = ({
  loggedIn,
  translations,
}) =>
  <div>{ loggedIn ? translations.loggedIn : translations.loggedOut }</div>;

LoggedIn.propTypes = {
  loggedIn: PropTypes.bool,
  translations: PropTypes.shape({
    loggedIn: PropTypes.string,
    loggedOut: PropTypes.string,
  }).isRequired,
};

LoggedIn.defaultProps = {
  loggedIn: false,
};

export default LoggedIn;
