import React from 'react';
import PropTypes from 'prop-types';
import LoggedIn from '@bufferapp/example';

const profilePageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const profileSideBarStyle = {
  background: 'blue',
  color: 'white',
  flexBasis: '16rem',
  width: '16rem',
  minWidth: '16rem',
};

const contentStyle = {
  flexGrow: 1,
  background: 'orange',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
};

const tabStyle = {
  background: 'green',
  height: '4rem', // this might change when actual tabs are added
};

const tabContentStyle = {
  flexGrow: 1,
  overflowY: 'auto',
};

// TODO: this is only for testing content that is scrollable - delete this
const ScrollableGarbage = () =>
  [...Array(200).keys()].map(i =>
    <div
      key={i}
      style={{
        border: '1px solid',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      {i}
    </div>,
  );


const TabContent = ({ tabId }) => {
  switch (tabId) {
    case 'queue':
      return (
        <div>Queue</div>
      );
    case 'sent':
      return (
        <div>Sent</div>
      );
    case 'settings':
      return (
        <div>Settings</div>
      );
    default:
      return (
        <div>
          <div>Default - This Should Be Deleted Before Final Ship</div>
          <LoggedIn />
          <h1>Welcome to Buffer Publish!</h1>
          {ScrollableGarbage()}
        </div>
      );
  }
};

TabContent.propTypes = {
  tabId: PropTypes.string,
};

TabContent.defaultProps = {
  tabId: '',
};

const ProfilePage = ({ match: { params: { profileId, tabId } } }) =>
  <div style={profilePageStyle}>
    <div style={profileSideBarStyle}>
      <div>Profile Sidebar</div>
      <div>ProfileId: <strong>{profileId}</strong></div>
    </div>
    <div style={contentStyle}>
      <div style={tabStyle}>
        <div>Tabs</div>
        TabId: <strong>{tabId}</strong>
      </div>
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
