import React from 'react';
import PropTypes from 'prop-types';
import {
  Text
} from '@bufferapp/components';

import { calculateStyles } from '@bufferapp/components/lib/utils';
import { sidebarPopover } from '@bufferapp/components/style/color';
import { borderRadius } from '@bufferapp/components/style/border';

const arrowHeight = 14;
const arrowWidth = 8;

const Popover = ({
  children,
  visible,
  offset,
  oneLine,
  position
}) => {
  const style = calculateStyles({
    default: {
      background: sidebarPopover,
      color: '#fff',
      display: 'inline-block',
      borderRadius,
      padding: '.25rem .75rem',
      position: 'absolute',
      left: '100%',
      marginLeft: offset ? offset.left : 0,
      boxShadow: '0 1px 2px 0 rgba(0,0,0,0.50)'
    },
    hidden: {
      display: 'none'
    },
    oneLine: {
      whiteSpace: 'nowrap'
    },
    positionAbove: {
      bottom: '100%',
      marginBottom: '-29px'
    },
    positionBelow: {
      top: offset ? offset.top : 0,
    }
  }, {
    hidden: !visible,
    positionAbove: position === 'above',
    positionBelow: position === 'below',
    oneLine
  });

  const arrowStyle = calculateStyles({
    default: {
      position: 'absolute',
      left: -arrowWidth + 1,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: arrowHeight/2.0,
      borderRightWidth: arrowWidth,
      borderBottomWidth: arrowHeight/2.0,
      borderLeftWidth: 0,
      borderTopColor: 'transparent',
      borderRightColor: sidebarPopover,
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
    },
    positionAbove: {
      top: '100%',
      marginTop: '-20px'
    },
    positionBelow: {
      top: '6px',
    }
  }, {
    positionAbove: position === 'above',
    positionBelow: position === 'below',
  });

  return (
    <div style={style}>
      <span style={arrowStyle}></span>
      <Text color="white" size="small">{children}</Text>
    </div>
  );
}

Popover.propTypes = {
  // translations: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  oneLine: PropTypes.bool,
  offset: PropTypes.shape({
    left: PropTypes.string,
    top: PropTypes.string
  }),
  position: PropTypes.oneOf(['above', 'below'])
};

Popover.defaultProps = {
  visible: false,
  oneLine: true,
  position: 'above'
};

export default Popover;
