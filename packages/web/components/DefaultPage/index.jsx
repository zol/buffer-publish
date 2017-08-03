import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Text, Divider } from '@bufferapp/components';

const defaultPageStyle = {
  padding: '1rem',
  textAlign: 'center',
};

const DefaultPage = ({ loggedIn, loggingIn, checkedCookie }) => {
  let message = 'You are not logged in.';
  if (loggedIn) {
    message = 'You are logged in. Fetching data...';
  }
  if (loggingIn) {
    message = 'Please wait...';
  }

  const imgStyle = {
    width: '45px',
    marginTop: '5rem',
  };
  return (
    checkedCookie && <div style={defaultPageStyle}>
      <Text size="large">Welcome to Buffer Publish 🎉</Text>
      <Divider />
      {loggingIn && <Text>{message}</Text>}
      {loggedIn && <img style={imgStyle} alt="" src="https://s3.amazonaws.com/buffer-publish/images/black-loading-gif-small.gif" />}
    </div>
  );
};

DefaultPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  checkedCookie: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ login }) => login;

export default connect(mapStateToProps)(DefaultPage);
