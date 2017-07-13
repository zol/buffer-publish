import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import {
  borderWidth,
} from '../style/border';
import colors, {
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
  color: PropTypes.oneOf(Object.keys(colors)),
  size: PropTypes.string,
};

Divider.defaultProps = {
  children: undefined,
  color: undefined,
  size: undefined,
};

export default Divider;
