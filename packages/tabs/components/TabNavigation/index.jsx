import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {
  Tabs,
  Tab,
} from '@bufferapp/publish-shared-components';


// TODO: Add composer placeholder
const TabNavigation = ({
  onTabClick,
  activeTabId,
}) =>
  <Tabs
    activeTabId={activeTabId}
    onTabClick={onTabClick}
  >
    <Tab tabId={'12345'}>Queue (1)</Tab>
    <Tab tabId={uuid()}>Sent Posts</Tab>
    <Tab tabId={uuid()}>Settings</Tab>
  </Tabs>;


TabNavigation.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  activeTabId: PropTypes.string.isRequired,
};

TabNavigation.defaultProps = {
  activeTabId: '',
};

export default TabNavigation;
