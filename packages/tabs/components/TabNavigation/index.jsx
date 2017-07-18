import React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs,
  Tab,
} from '@bufferapp/publish-shared-components';

const TabNavigation = ({
  activeTabId,
  profileId,
}) =>
  <Tabs activeTabId={activeTabId}>
    <Tab route={`/profile/${profileId}/tab/queue`} active>Queue</Tab>
    <Tab route={`/profile/${profileId}/tab/sent`} active>Sent Posts</Tab>
    <Tab route={`/profile/${profileId}/tab/settings`} active>Settings</Tab>
  </Tabs>;

TabNavigation.propTypes = {
  activeTabId: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
};

TabNavigation.defaultProps = {
  activeTabId: '',
};

export default TabNavigation;
