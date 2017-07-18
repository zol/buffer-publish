import React from 'react';
import PropTypes from 'prop-types';
import {
  geyser,
} from '@bufferapp/components/style/color';

const tabsStyle = {
  borderBottom: `1px solid ${geyser}`,
};

const Tabs = ({ children }) => (
  <div style={tabsStyle}>
    {React.Children.map(children, tab => (
        React.cloneElement(tab, {
          route: tab.props.route,
        })
    ))}
  </div>
);

Tabs.propTypes = {
  children: PropTypes.node,
};

export default Tabs;
