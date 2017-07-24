import React from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
} from '@bufferapp/components';

const tabsStyle = {
  paddingTop: '21px',
};

const Tabs = ({
  children,
  selectedTabId,
  onTabClick,
}) => (
  <div style={tabsStyle}>
    {React.Children.map(children, tab => React.cloneElement(tab, {
      selected: selectedTabId === tab.props.tabId,
      onClick: onTabClick,
    }))}
    <Divider marginTop={'0'} marginBottom={'0'} />
  </div>
);

Tabs.propTypes = {
  children: PropTypes.node,
  selectedTabId: PropTypes.string,
  onTabClick: PropTypes.func,
};

export default Tabs;
