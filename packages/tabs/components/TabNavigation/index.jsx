import React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs,
  Tab,
} from '@bufferapp/publish-shared-components';

const TabNavigation = ({
  activeTabId,
  profileId,
  onTabClick,
}) =>
  <Tabs activeTabId={activeTabId}>
    <Tab onClick={() => onTabClick('queue', profileId)} active>Queue</Tab>
    <Tab onClick={() => onTabClick('sent', profileId)} active>Sent Posts</Tab>
    <Tab onClick={() => onTabClick('settings', profileId)} active>Settings</Tab>
  </Tabs>;

TabNavigation.propTypes = {
  activeTabId: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

TabNavigation.defaultProps = {
  activeTabId: '',
};

export default TabNavigation;
