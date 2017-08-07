import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import Text from '../Text';
import { calculateStyles } from '../lib/utils';
import PseudoClassComponent from '../PseudoClassComponent';
import ArrowUpIcon from '../Icon/Icons/ArrowUpIcon';
import ArrowDownIcon from '../Icon/Icons/ArrowDownIcon';

// generate array of numbers (inclusive)
const genArray = (start, end) => [...Array(end + 1).keys()].slice(start);
const leftPadTimeUnit = timeUnit => (timeUnit < 10 ? `0${timeUnit}` : timeUnit);

/* eslint-disable react/prop-types */
const TopArrow = ({ visible }) =>
  <div
    style={{
      opacity: visible ? 1 : 0,
      alignSelf: 'center',
      display: 'flex',
    }}
  >
    <ArrowUpIcon size={'small'} />
  </div>;

const BottomArrow = ({ visible }) =>
  <div
    style={{
      opacity: visible ? 1 : 0,
      alignSelf: 'center',
      display: 'flex',
    }}
  >
    <ArrowDownIcon size={'small'} />
  </div>;

const selectWrapperStyle = ({
  minimal,
  marginLeft = 0,
  marginRight = 0,
}) => calculateStyles({
  default: {
    position: 'relative',
    flex: 1,
    marginLeft,
    marginRight,
  },
  minimal: {
    display: 'flex',
    flexDirection: 'column',
  },
}, {
  minimal,
});

const SelectWrapperStateless = ({
  children,
  minimal,
  marginLeft,
  marginRight,
  hovered,
  onMouseEnter,
  onMouseLeave,
}) =>
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={selectWrapperStyle({
      minimal,
      marginLeft,
      marginRight,
      hovered,
    })}
  >
    <TopArrow visible={hovered && minimal} />
    {children}
    <BottomArrow visible={hovered && minimal} />
  </div>;

class SelectWrapper extends PseudoClassComponent {
  render() {
    const { children, ...rest } = this.props;
    let hoveredChildren = children;
    // string as children isn't clonable
    if (React.isValidElement(children)) {
      hoveredChildren = React.cloneElement(
        children,
        { hovered: this.state.hovered },
      );
    }
    return (
      <SelectWrapperStateless
        {...rest}
        hovered={this.state.hovered}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        {hoveredChildren}
      </SelectWrapperStateless>
    );
  }
}

const timeColonWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  flex: 0,
  marginLeft: '0.1rem',
  marginRight: '0.1rem',
};

const TimeColonWrapper = ({
  children,
}) =>
  <div
    style={timeColonWrapperStyle}
  >
    {children}
  </div>;

const AmPm = ({
  disabled,
  minimal,
  onChange,
  submitting,
  value,
}) =>
  <SelectWrapper minimal={minimal}>
    <Select
      disabled={disabled || submitting}
      onChange={e => onChange({
        ...value,
        hours: e.target.value === 'AM'
        ? value.hours - 12
        : value.hours + 12,
      })}
      noStyle={minimal}
      value={value.hours < 12 ? 'AM' : 'PM'}
      options={[{ value: 'AM', name: 'AM' }, { value: 'PM', name: 'PM' }]}
      centerText={minimal}
      rangeSelector={!minimal}
    />
  </SelectWrapper>;

/* eslint-enable react/prop-types */

const displayHour = (hour, select24Hours) => {
  if (select24Hours) {
    return hour;
  } else if (hour === 0) {
    return 12;
  }
  const modHour = hour % 12;
  return modHour === 0 ? 12 : modHour;
};

const generateHours = (select24Hours, value) => {
  const timeArray = genArray(
    select24Hours || value.hours < 12 ? 0 : 12,
    select24Hours || value.hours > 11 ? 23 : 11,
  );
  return timeArray.map((hour) => {
    const displaytime = leftPadTimeUnit(displayHour(hour, select24Hours)).toString();
    return { value: hour, name: displaytime };
  });
};

const generateMinutes = () => (
  genArray(0, 59).map((min) => {
    const displayMin = leftPadTimeUnit(min).toString();
    return { value: min, name: displayMin };
  })
);

const InputTime = ({
  disabled,
  input: {
    value,
    onChange,
  },
  meta: {
    submitting,
  },
  minimal,
  select24Hours,
  displayTimeColon,
}) => {
  const style = {
    width: '100%',
    display: 'flex',
  };

  if (!value) {
    value = { hours: 0, minutes: 0 };
  }
  return (
    <div style={style}>
      <SelectWrapper minimal={minimal}>
        <Select
          disabled={disabled || submitting}
          onChange={e => onChange({ ...value, hours: parseInt(e.target.value, 10) })}
          value={value.hours}
          options={generateHours(select24Hours, value)}
          label={'Hour'}
          noStyle={minimal}
          centerText={minimal}
          rangeSelector={!minimal}
        />
      </SelectWrapper>
      { displayTimeColon ?
        <TimeColonWrapper
          minimal={minimal}
        >
          <Text>:</Text>
        </TimeColonWrapper>
        : null }
      <SelectWrapper
        minimal={minimal}
        marginLeft={displayTimeColon ? 0 : '0.25rem'}
        marginRight={'0.25rem'}
      >
        <Select
          disabled={disabled || submitting}
          onChange={e => onChange({ ...value, minutes: parseInt(e.target.value, 10) })}
          value={value.minutes}
          options={generateMinutes()}
          label={'Minute'}
          noStyle={minimal}
          centerText={minimal}
          rangeSelector={!minimal}
        />
      </SelectWrapper>
      {
        select24Hours ?
        null
        :
        AmPm({ disabled, minimal, onChange, submitting, value })
      }
    </div>
  );
};

InputTime.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.shape({
        hours: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
      }),
      PropTypes.string,
    ]),
  }).isRequired,
  meta: PropTypes.shape({
    submitting: PropTypes.bool,
  }),
  minimal: PropTypes.bool,
  select24Hours: PropTypes.bool,
  displayTimeColon: PropTypes.bool,
};

InputTime.defaultProps = {
  meta: {},
};

export default InputTime;
