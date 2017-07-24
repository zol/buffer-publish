import React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs,
  Tab,
} from '@bufferapp/publish-shared-components';

const TabNavigation = ({
  selectedTabId,
  onTabClick,
}) =>
  <Tabs
    selectedTabId={selectedTabId}
    onTabClick={onTabClick}
  >
    <Tab tabId={'queue'}>Queue</Tab>
    <Tab tabId={'sent'}>Sent Posts</Tab>
    <Tab tabId={'settings'}>Settings</Tab>
  </Tabs>;

TabNavigation.propTypes = {
  selectedTabId: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabNavigation;
