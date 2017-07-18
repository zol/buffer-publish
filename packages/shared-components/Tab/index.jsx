import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  curiousBlue,
} from '@bufferapp/components/style/color';
import {
  calculateStyles,
} from '@bufferapp/components/lib/utils';
import HoverableText from '../HoverableText';

const Tab = ({
  children,
  active,
  route,
}) => {
  const style = calculateStyles({
    default: {
      padding: '0 4px 16px 4px',
      margin: '0 8px 0 8px',
      display: 'inline-block',
      minWidth: '60px',
      textAlign: 'center',
    },
    active: {
      borderBottom: active ? `2px solid ${curiousBlue}` : '',
    },
  }, {
    active,
  });

  const linkStyle = {
    textDecoration: 'none',
  };

  return (
    <div
      style={style}
    >
      <Link to={route} style={linkStyle}>
        <HoverableText
          hoverColor={'black'}
        >
          {children}
        </HoverableText>
      </Link>
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
