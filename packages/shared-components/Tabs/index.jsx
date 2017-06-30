import React from 'react';
import PropTypes from 'prop-types';
import {
  geyser,
} from '@bufferapp/components/style/color';
import Tab from '../Tab';

const tabsStyle = {
  borderBottom: `1px solid ${geyser}`,
};

const Tabs = ({ children, activeTabId, onTabClick }) => (
  <div style={tabsStyle}>
    {React.Children.map(children, tab => (
        React.cloneElement(tab, {
          // pass props from `Tabs` to `Tab`
          active: tab.props.tabId === activeTabId,
          onClick: () => onTabClick({ tabId: tab.props.tabId }),
        })
    ))}
  </div>
);

Tabs.propTypes = {
  onTabClick: PropTypes.func,
  children: PropTypes.node,
  activeTabId: React.PropTypes.string,
};

Tab.defaultProps = {
  tab: [],
};

export default Tabs;
