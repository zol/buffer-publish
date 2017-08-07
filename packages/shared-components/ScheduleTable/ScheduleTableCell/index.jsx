import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CloseIcon,
  InputTime,
} from '@bufferapp/components';
import TableCell from '../../TableCell';

const style = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonStyle = {
  position: 'absolute',
  right: '0.5rem',
};

const iconWrapperStyle = {
  marginTop: '0.1rem',
};

/* eslint-disable react/prop-types */

const RemoveButton = ({ onRemoveTimeClick }) =>
  <div style={buttonStyle}>
    <Button onClick={onRemoveTimeClick} noStyle>
      <div style={iconWrapperStyle}>
        <CloseIcon size={'small'} />
      </div>
    </Button>
  </div>;

const TableCellContents = ({
  disabled,
  hovered,
  select24Hours,
  time,
}) =>
  <div style={style}>
    {hovered && !disabled ? RemoveButton(time) : null}
    <div
      style={{
        width: '4.5rem',
      }}
    >
      <InputTime
        disabled={disabled}
        input={time}
        select24Hours={select24Hours}
        minimal
        centerText
        displayTimeColon
      />
    </div>
  </div>;
/* eslint-enable react/prop-types */

const ScheduleTableCell = ({
  disabled,
  select24Hours,
  time,
}) => (
  <TableCell>
    <TableCellContents
      disabled={disabled}
      select24Hours={select24Hours}
      time={time}
    />
  </TableCell>
  );

ScheduleTableCell.defaultProps = {
  disabled: false,
  select24Hours: false,
};

// TODO: onChange and onRemoveTimeClick required when app is not read-only
ScheduleTableCell.propTypes = {
  disabled: PropTypes.bool.isRequired,
  select24Hours: PropTypes.bool.isRequired,
  time: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.shape({
        hours: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
      }),
      PropTypes.string,
    ]),
    onChange: PropTypes.func,
    onRemoveTimeClick: PropTypes.func,
  }).isRequired,
};

export default ScheduleTableCell;
