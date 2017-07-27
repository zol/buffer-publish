import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';

import QueuedPosts from '@bufferapp/queue';
import SentPosts from '@bufferapp/sent';
import ProfileSettings from '@bufferapp/settings';
import TabNavigation from '@bufferapp/tabs';
import ProfileSidebar from '@bufferapp/profile-sidebar';

const profilePageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const profileSideBarStyle = {
  flexBasis: '16rem',
  width: '16rem',
  minWidth: '16rem',
};

const contentStyle = {
  flexGrow: 1,
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1rem',
  marginRight: '1rem',
};

const tabContentStyle = {
  flexGrow: 1,
  overflowY: 'auto',
  marginTop: '1rem',
};

const TabContent = ({ tabId }) => {
  switch (tabId) {
    case 'queue':
      return (
        <QueuedPosts
          onCancelConfirmClick={() => { console.log('cancel confirm click'); }}
          onDeleteClick={() => { console.log('delete click'); }}
          onDeleteConfirmClick={() => { console.log('delete click'); }}
          onEditClick={() => { console.log('edit click'); }}
          onShareNowClick={() => { console.log('share now click'); }}
        />
      );
    case 'sent':
      return (
        <SentPosts />
      );
    case 'settings':
      return (
        <ProfileSettings />
      );
    default:
      return (
        <Redirect to="/" />
      );
  }
};

TabContent.propTypes = {
  tabId: PropTypes.string,
};

TabContent.defaultProps = {
  tabId: '',
};

const ProfilePage = ({
  match: {
    params: {
      profileId,
      tabId,
    },
  },
}) =>
  <div style={profilePageStyle}>
    <div style={profileSideBarStyle}>
      <ProfileSidebar
        profileId={profileId}
        tabId={tabId}
      />
    </div>
    <div style={contentStyle}>
      <TabNavigation
        profileId={profileId}
        tabId={tabId}
      />
      <div style={tabContentStyle}>
        {TabContent({ tabId })}
      </div>
    </div>
  </div>;

ProfilePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
      profileId: PropTypes.string,
    }),
  }).isRequired,
};

export default ProfilePage;
