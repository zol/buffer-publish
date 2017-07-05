import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import {
  borderWidth,
} from '../style/border';
import {
  mystic,
} from '../style/color';

const dividerStyle = {
  border: `${borderWidth} solid ${mystic}`,
  width: '100%',
};

const Divider = ({
  children,
  color,
  size,
}) =>
  (<div>
    {children && <Text size={size} color={color}>{children}</Text>}
    <hr style={dividerStyle} />
  </div>
  );

Divider.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf([
    'appdotnet',
    'aquaHaze',
    'black',
    'curiousBlue',
    'curiousBlueLight',
    'curiousBlueUltraLight',
    'denim',
    'facebook',
    'geyser',
    'googleplus',
    'linkedin',
    'mystic',
    'nevada',
    'outerSpace',
    'outerSpaceLight',
    'outerSpaceUltraLight',
    'pinterest',
    'saffron',
    'shamrock',
    'shuttleGray',
    'toryBlue',
    'torchRed',
    'twitter',
    'white',
  ]),
  size: PropTypes.string,
};

Divider.defaultProps = {
  children: undefined,
  color: undefined,
  size: undefined,
};

export default Divider;
