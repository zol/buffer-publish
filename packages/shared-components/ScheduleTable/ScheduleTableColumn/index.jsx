import React from 'react';
import PropTypes from 'prop-types';
import { borderWidth } from '@bufferapp/components/style/border';
import {
  mystic,
  geyser,
} from '@bufferapp/components/style/color';
import ScheduleTableHeader from '../ScheduleTableHeader';
import ScheduleTableCell from '../ScheduleTableCell';

const columnHeight = '8rem';

const columnStyle = {
  width: 0,
  minHeight: columnHeight,
  textAlign: 'center',
  borderRight: `${borderWidth} solid ${mystic}`,
  flexGrow: 1,
};

const columnNoTimesStyle = {
  width: 0,
  minHeight: columnHeight,
  color: geyser,
  textAlign: 'center',
  borderRight: `${borderWidth} solid ${mystic}`,
  flexGrow: 1,
};

const columnWrapperStyle = {
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
};

const ScheduleTableColumn = ({
  dayName,
  disabled,
  select24Hours,
  times,
  onUpdateTime,
}) => (
  <div style={(times.length === 0) ? columnNoTimesStyle : columnStyle}>
    <ScheduleTableHeader
      dayName={dayName}
      postingTimesTotal={times.length}
    />
    <div style={columnWrapperStyle}>
      {
        times.map((time, index) =>
          <ScheduleTableCell
            disabled={disabled}
            key={index}
            select24Hours={select24Hours}
            time={time}
            onUpdateTime={onUpdateTime}
            dayName={dayName}
            timeIndex={index}
          />,
        )
      }
    </div>
  </div>
  );

ScheduleTableColumn.defaultProps = {
  disabled: false,
  select24Hours: false,
};

ScheduleTableColumn.propTypes = {
  dayName: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  select24Hours: PropTypes.bool.isRequired,
  times: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.shape({
          hours: PropTypes.number.isRequired,
          minutes: PropTypes.number.isRequired,
        }),
        PropTypes.string,
      ]),
      onRemoveTimeClick: PropTypes.func,
    }).isRequired,
  ).isRequired,
  onUpdateTime: PropTypes.func.isRequired,
};

export default ScheduleTableColumn;
