import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {
  geyser,
} from '@bufferapp/components/style/color';
import Tab from '../Tab';

const tabsStyle = {
  borderBottom: `1px solid ${geyser}`,
};

const Tabs = ({
  tabs,
}) =>
  <div style={tabsStyle}>
    {tabs.map(tab => <Tab key={uuid()} onClick={tab.onClick}>{tab.title}</Tab>)}
  </div>;

const tabShape = PropTypes.shape({
  title: React.PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(tabShape).isRequired,
};

Tab.defaultProps = {
  tab: [],
};

export default Tabs;
