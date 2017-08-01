import React from 'react';
import PropTypes from 'prop-types';
import { calculateStyles } from '../lib/utils';
import {
  transparent,
  mystic,
} from '../style/color';
import {
  fontSizeSmall,
} from '../style/font';
import {
  borderRadius,
  borderWidth,
} from '../style/border';
import {
  tooltip,
} from '../style/zIndex';
import ArrowDownIcon from '../Icon/Icons/ArrowDownIcon';

const iconStyle = {
  zIndex: 0,
  display: 'flex',
  marginLeft: '-2rem',
  alignItems: 'center',
};

const Select = ({ options, onChange, disabled, noStyle, label }) => {
  const selectStyle = calculateStyles({
    default: {
      zIndex: tooltip,
      height: '2rem',
      paddingRight: '1.5rem',
      paddingLeft: '0.5rem',
      marginRight: '0.5rem',
      fontSize: fontSizeSmall,
      background: transparent,
      border: `${borderWidth} solid ${mystic}`,
      borderRadius,
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    },
    noStyle: {
      border: 0,
      background: 'transparent',
      margin: 0,
      padding: 0,
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    },
  }, {
    noStyle,
  });
  const selectWrapperStyle = calculateStyles({
    default: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      paddingRight: '1.5rem',
    },
    noStyle: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      paddingRight: '0.5rem',
    },
  }, {
    noStyle,
  });
  return (
    <div style={selectWrapperStyle}>
      <select
        style={selectStyle}
        onChange={onChange}
        disabled={disabled}
        aria-label={label}
      >
        {
          options.map(option =>
            <option key={option.value.toString()} value={option.value}>
              {option.name}
            </option>,
            )
        }
      </select>
      {!noStyle &&
        <span style={iconStyle}>
          <ArrowDownIcon />
        </span>
      }
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  noStyle: PropTypes.bool,
  label: PropTypes.string,
};

Select.defaultProps = {
  onChange: () => {},
  disabled: false,
  noStyle: false,
  label: null,
};

export default Select;
