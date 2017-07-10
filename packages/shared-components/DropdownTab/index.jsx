import React from 'react';
import PropTypes from 'prop-types';
import {
  geyser,
} from '@bufferapp/components/style/color';
import {
  calculateStyles,
} from '@bufferapp/components/lib/utils';
import Tab from '../Tab/index';


const DropdownTab = ({
  children,
  active,
  title,
  isDropdownShown,
}) => {
  const style = calculateStyles({
    default: {
      display: 'none',
    },
    isDropdownShown: {
      display: 'table',
      border: `1px solid ${geyser}`,
      padding: '4px',
      listStyle: 'none',
      borderRadius: '2px',
      position: 'absolute',
      background: 'white',
      marginTop: '-4px',
    },
  }, {
    isDropdownShown,
  });

  const containerStyle = {
    display: 'inline-block',
  };

  return (
    <div style={containerStyle}>
      <Tab active={active}>{title}</Tab>
      <ul style={style}>
        {React.Children.map(children, dropdownItem => (
            React.cloneElement(dropdownItem, {
              onClick: () => dropdownItem.props.onClick,
            })
        ))}
      </ul>
    </div>
  );
};

DropdownTab.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  isDropdownShown: PropTypes.bool.isRequired,
};

DropdownTab.defaultProps = {
  active: false,
  title: '',
  isDropdownShown: false,
};

export default DropdownTab;
