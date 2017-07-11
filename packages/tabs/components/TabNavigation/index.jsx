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
  >
    <Tab tabId={'12345'} active onTabClick={onTabClick}>Queue (1)</Tab>
    <Tab tabId={uuid()} active onTabClick={onTabClick}>Sent Posts</Tab>
    <Tab tabId={uuid()} active onTabClick={onTabClick}>Settings</Tab>
  </Tabs>;


TabNavigation.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  activeTabId: PropTypes.string.isRequired,
};

TabNavigation.defaultProps = {
  activeTabId: '',
};

export default TabNavigation;
