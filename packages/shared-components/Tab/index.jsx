import React from 'react';
import PropTypes from 'prop-types';
import {
  curiousBlue,
} from '@bufferapp/components/style/color';
import {
  Button,
} from '@bufferapp/components';
import {
  calculateStyles,
} from '@bufferapp/components/lib/utils';
import HoverableText from '../HoverableText';

const Tab = ({
  children,
  active,
  onClick,
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

  return (
    <div
      style={style}
    >
      <Button noStyle onClick={onClick}>
        <HoverableText
          hoverColor={'black'}
        >
          {children}
        </HoverableText>
      </Button>
    </div>
  );
};

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Tab.defaultProps = {
  active: false,
};

export default Tab;
