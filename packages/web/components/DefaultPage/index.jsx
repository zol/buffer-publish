import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Text, Divider } from '@bufferapp/components';

const defaultPageStyle = {
  padding: '1rem',
};

const DefaultPage = ({ loggedIn }) => {
  if (loggedIn) {
    return (
      <div style={defaultPageStyle}>
        <Text size="large">Welcome to Buffer Publish 🎉</Text>
        <Divider />
        <Text>You should login.</Text>
      </div>
    );
  }
  return (
    <div style={defaultPageStyle}>
      <Text size="large">Welcome to Buffer Publish 🎉</Text>
      <Divider />
      <Text>Looks like you are logged in!</Text>
    </div>
  );
};

DefaultPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

DefaultPage.defaultProps = {
  loggedIn: false,
};

export default connect(state => ({
  loggedIn: !!state.login.sessionToken,
}))(DefaultPage);
