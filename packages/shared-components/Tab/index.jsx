import React from 'react';
import PropTypes from 'prop-types';
import {
  curiousBlue,
} from '@bufferapp/components/style/color';
import {
  Button,
} from '@bufferapp/components';
import HoverableText from '../HoverableText';

const tabStyle = (active) => { //eslint-disable-line
  return {
    borderBottom: active ? `2px solid ${curiousBlue}` : '',
    padding: '0 4px 16px 4px',
    margin: '0 8px 0 8px',
    display: 'inline-block',
    minWidth: '60px',
    textAlign: 'center',
  };
};

const Tab = ({
  children,
  active,
  onClick,
}) =>
  <div
    style={tabStyle(active)}
  >
    <Button noStyle onClick={onClick}>
      <HoverableText
        hoverColor={'black'}
      >
        {children}
      </HoverableText>
    </Button>
  </div>;

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Tab.defaultProps = {
  active: false,
};

export default Tab;
