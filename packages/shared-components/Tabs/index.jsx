import React from 'react';
import PropTypes from 'prop-types';
import {
  geyser,
} from '@bufferapp/components/style/color';

const tabsStyle = {
  borderBottom: `1px solid ${geyser}`,
  paddingTop: '21px',
};

const Tabs = ({ children }) => (
  <div style={tabsStyle}>
    {children}
  </div>
);

Tabs.propTypes = {
  children: PropTypes.node,
};

export default Tabs;
