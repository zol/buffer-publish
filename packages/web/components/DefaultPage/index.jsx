import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Text,
  LoadingAnimation,
} from '@bufferapp/components';

import ProfileSidebar from '@bufferapp/publish-profile-sidebar';

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const profileSideBarStyle = {
  flexBasis: '16rem',
  width: '16rem',
  minWidth: '16rem',
};

const defaultPageStyle = {
  padding: '1rem',
  textAlign: 'center',
  flex: '1',
};

const DefaultPage = ({ loggedIn }) => (
  <div style={pageStyle}>
    <div style={profileSideBarStyle}>
      <ProfileSidebar />
    </div>
    <div style={defaultPageStyle}>
      {!loggedIn && <Text>Whoops, it looks like you&apos;re not logged in.</Text>}
      {loggedIn && <LoadingAnimation />}
    </div>
  </div>
);

DefaultPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ login }) => login;

export default connect(mapStateToProps)(DefaultPage);
