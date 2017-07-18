import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  curiousBlue,
} from '@bufferapp/components/style/color';
import HoverableText from '../HoverableText';

const Tab = ({
  children,
  active,
  route,
}) => {
  const style = {
    padding: '0 4px 16px 4px',
    margin: '0 8px 0 8px',
    display: 'inline-block',
    minWidth: '60px',
    textAlign: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
  };

  const linkActiveStyle = {
    borderBottom: `2px solid ${curiousBlue}`,
  };

  return (
    <div
      style={style}
    >
      <NavLink to={route} style={linkStyle} activeStyle={linkActiveStyle}>
        <HoverableText
          hoverColor={'black'}
        >
          {children}
        </HoverableText>
      </NavLink>
    </div>
  );
};

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node,
  route: PropTypes.string.isRequired,
};

Tab.defaultProps = {
  active: false,
};

export default Tab;
