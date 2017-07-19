import React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs,
  Tab,
} from '@bufferapp/publish-shared-components';

const TabNavigation = ({
  profileId,
}) =>
  <Tabs>
    <Tab routeTo={`/profile/${profileId}/tab/queue`}>Queue</Tab>
    <Tab routeTo={`/profile/${profileId}/tab/sent`}>Sent Posts</Tab>
    <Tab routeTo={`/profile/${profileId}/tab/settings`}>Settings</Tab>
  </Tabs>;

TabNavigation.propTypes = {
  profileId: PropTypes.string.isRequired,
};

export default TabNavigation;
