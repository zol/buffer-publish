/**
 * Date + time picker combo!
 *
 * DateTimeSlotPicker is timezone-aware, and works with 12/24h formats. If the
 * component is passed a different timezone through props after it's been
 * mounted, it'll update the date and time to that new timezone and go on with
 * its business. The component also ensures the selected date and time are in
 * the future, no matter the timezone.
 *
 * This component is uncontrolled (except for the timezone prop), and uses the
 * onSubmit callback in props to let its parent know of any scheduling action.
 */

import React from 'react';
import moment from 'moment-timezone';
import DatePicker from 'react-day-picker';
import TimePicker from '../components/TimePicker';
import SlotPicker from '../components/SlotPicker';
import Button from '../components/Button';
import Select from '../components/Select';

import './css/DatePicker.css'; // 'react-day-picker' uses global BEM-like classes
import styles from './css/DateTimeSlotPicker.css';

class DateTimeSlotPicker extends React.Component {
  getState() {
    const { timezone, initialDateTime } = this.props;
    const todayDate = (new Date()).setSeconds(0); // Seconds must be 0 for precise scheduling
    const isTimezoneSet = !!timezone;

    // Determine initial date and time for the picker
    const today = isTimezoneSet ? moment.tz(todayDate, timezone) : moment(todayDate);
    const selectedDateTime = initialDateTime || today.clone().add(3, 'hours');
    const shouldDisplaySlotPicker =
      this.shouldDisplaySlotPickerOnInit(selectedDateTime, this.props);

    return {
      today,
      selectedDateTime,
      shouldDisplaySlotPicker,
    };
  }

  shouldDisplaySlotPickerOnInit = (selectedDateTime, props) => {
    const { isSlotPickingAvailable, availableSchedulesSlotsForDay } = props;

    const hasAvailableSchedulesSlotsInfoForDay =
      typeof availableSchedulesSlotsForDay !== 'undefined';

    if (!isSlotPickingAvailable || !hasAvailableSchedulesSlotsInfoForDay) return undefined;

    const selectedTimestamp = selectedDateTime.unix();
    const isAnySlotSelected =
      availableSchedulesSlotsForDay.some((slot) => slot.timestamp === selectedTimestamp);

    return isAnySlotSelected && props.isPinnedToSlot;
  };

  static propTypes = {
    shouldUse24hTime: React.PropTypes.bool.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    isSlotPickingAvailable: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    onChange: React.PropTypes.func,
    timezone: React.PropTypes.string,
    weekStartsMonday: React.PropTypes.bool.isRequired,
    availableSchedulesSlotsForDay: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.arrayOf(React.PropTypes.shape({
        isSlotFree: React.PropTypes.bool.isRequired,
        timestamp: React.PropTypes.number.isRequired,
      })),
    ]),
    isPinnedToSlot: React.PropTypes.bool,
    metaData: React.PropTypes.object,
    initialDateTime: React.PropTypes.instanceOf(moment),
    submitButtonCopy: React.PropTypes.string,
  };

  static defaultProps = {
    shouldUse24hTime: false,
    isSlotPickingAvailable: false,
    onClick: () => {},
    onChange: () => {},
    timezone: 'Europe/Paris',
    submitButtonCopy: 'Schedule',
    availableSchedulesSlotsForDay: undefined,
    isPinnedToSlot: null,
    metaData: undefined,
  };

  state = this.getState();

  updateDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const newSelectedDateTime = this.state.selectedDateTime.year(year).month(month).date(day);
    const isPinnedToSlot = this.state.shouldDisplaySlotPicker;

    this.setState({
      selectedDateTime: newSelectedDateTime,
    });

    this.props.onChange(newSelectedDateTime, isPinnedToSlot);
  };

  updateTime = (time) => {
    const hours = time.hours();
    const minutes = time.minutes();
    const newSelectedDateTime = this.state.selectedDateTime.hour(hours).minute(minutes);
    const isPinnedToSlot = this.state.shouldDisplaySlotPicker;

    this.setState({
      selectedDateTime: newSelectedDateTime,
    });

    this.props.onChange(newSelectedDateTime, isPinnedToSlot);
  };

  // Set to UTC, then negate the original offset
  stripOffsetFromMoment = (m) => m.clone().utc().add(m.utcOffset(), 'm');

  onClick = this.props.onClick; // eslint-disable-line react/sort-comp

  onDayClick = (e, day, modifiers) => {
    const isDayDisabled = modifiers.disabled;
    if (isDayDisabled) return;

    this.updateDate(day);
  };

  onTimePickerChange = this.updateTime;
  onSlotPickerChange = this.updateTime;

  onSwitchToSlotPickerClick = () => {
    // Update UI state
    this.setState({ shouldDisplaySlotPicker: true });

    // If a slot is available for the current date time, update store to
    // transition from custom time to pinned update mode
    const { isSlotPickingAvailable, availableSchedulesSlotsForDay } = this.props;

    const hasAvailableSchedulesSlotsInfoForDay =
      typeof availableSchedulesSlotsForDay !== 'undefined';

    if (!isSlotPickingAvailable || !hasAvailableSchedulesSlotsInfoForDay) return;

    const selectedTimestamp = this.state.selectedDateTime.unix();
    const hasSlotAvailableForSelectedDateTime =
      availableSchedulesSlotsForDay.some((slot) => slot.timestamp === selectedTimestamp);

    const isPinnedToSlot = hasSlotAvailableForSelectedDateTime;
    this.props.onChange(this.state.selectedDateTime, isPinnedToSlot);
  };

  onSwitchToTimePickerClick = () => {
    const isPinnedToSlot = false;

    this.setState({ shouldDisplaySlotPicker: isPinnedToSlot });
    this.props.onChange(this.state.selectedDateTime, isPinnedToSlot);
  };

  onSubmit = () => this.props.onSubmit(this.state.selectedDateTime.unix());

  componentWillReceiveProps(nextProps) {
    const { today, selectedDateTime, shouldDisplaySlotPicker } = this.state;

    // Update selectedDateTime with the new timezone if it changes
    if (this.props.timezone !== nextProps.timezone && nextProps.timezone !== null) {
      this.setState({
        today: today.tz(nextProps.timezone),
        selectedDateTime: selectedDateTime.tz(nextProps.timezone),
      });
    }

    /**
     * MC is only bootstrapped with limited slot info: if it gets initialized with
     * a scheduledAt date that falls outside of this bootstrapped slot coverage,
     * we'll try determining whether to start in "slot picker mode" or not once
     * we've got additional slot info at our disposal.
     */
    const willSlotPickingBeAvailable = nextProps.isSlotPickingAvailable;
    const hasAvailableSchedulesSlotsInfoForDay =
      typeof this.props.availableSchedulesSlotsForDay !== 'undefined';
    const willHaveAvailableSchedulesSlotsInfoForDay =
      typeof nextProps.availableSchedulesSlotsForDay !== 'undefined';
    const didInitSlotPickerDisplayState = typeof shouldDisplaySlotPicker !== 'undefined';

    const shouldInitSlotPickerDisplayInfo = (
      willSlotPickingBeAvailable &&
      !hasAvailableSchedulesSlotsInfoForDay &&
      willHaveAvailableSchedulesSlotsInfoForDay &&
      !didInitSlotPickerDisplayState
    );

    if (shouldInitSlotPickerDisplayInfo) {
      this.setState({
        shouldDisplaySlotPicker: this.shouldDisplaySlotPickerOnInit(selectedDateTime, nextProps),
      });
    }

    // Keep store and component state in sync
    if (this.props.isPinnedToSlot !== nextProps.isPinnedToSlot) {
      this.setState({
        shouldDisplaySlotPicker: nextProps.isPinnedToSlot,
      });
    }
  }

  render() {
    const { today, selectedDateTime, shouldDisplaySlotPicker } = this.state;
    const {
      metaData, timezone, shouldUse24hTime, submitButtonCopy, isSlotPickingAvailable,
      availableSchedulesSlotsForDay,
    } = this.props;

    const hasAvailableSchedulesSlotsInfoForDay =
      typeof availableSchedulesSlotsForDay !== 'undefined';
    const shouldDisplayTimePicker = !shouldDisplaySlotPicker;

    const datePickerDayModifiers = {
      isToday: (day) => {
        const todayNoOffset = this.stripOffsetFromMoment(today);
        const dayNoOffset = this.stripOffsetFromMoment(moment(day));
        return todayNoOffset.isSame(dayNoOffset, 'day');
      },
      disabled: (day) => {
        const todayNoOffset = this.stripOffsetFromMoment(today);
        const dayNoOffset = this.stripOffsetFromMoment(moment(day));
        return todayNoOffset.isAfter(dayNoOffset, 'day');
      },
      selected: (day) => {
        const selectedDateTimeNoOffset = this.stripOffsetFromMoment(selectedDateTime);
        const dayNoOffset = this.stripOffsetFromMoment(moment(day));
        return selectedDateTimeNoOffset.isSame(dayNoOffset, 'day');
      },
    };

    const shouldDisplayTimezone = timezone !== null;
    const isTimeInFuture = selectedDateTime.isAfter();
    const formattedTimezone =
      shouldDisplayTimezone ? timezone.replace('/', ': ').replace('_', ' ') : null;
    const firstDayOfWeek = this.props.weekStartsMonday ? 1 : 0;

    return (
      <div onClick={this.onClick} className={styles.dateTimePicker}>
        <DatePicker
          fromMonth={new Date()}
          modifiers={datePickerDayModifiers}
          onDayClick={this.onDayClick}
          firstDayOfWeek={firstDayOfWeek}
        />

        {shouldDisplayTimePicker &&
          <TimePicker
            shouldUse24hTime={shouldUse24hTime} time={selectedDateTime}
            timezone={timezone} onChange={this.onTimePickerChange}
            className={styles.timePicker}
          />}

        {shouldDisplayTimePicker && isSlotPickingAvailable &&
          <Button
            className={styles.pickerSwitchButton}
            onClick={this.onSwitchToSlotPickerClick}
          >
            Switch to schedule slots
          </Button>}

        {shouldDisplaySlotPicker && isSlotPickingAvailable &&
        (hasAvailableSchedulesSlotsInfoForDay ?
          <SlotPicker
            metaData={metaData}
            shouldUse24hTime={shouldUse24hTime}
            timezone={timezone}
            slots={availableSchedulesSlotsForDay}
            slot={selectedDateTime}
            onChange={this.onSlotPickerChange}
            className={styles.slotPicker}
          /> :
          <Select disabled className={styles.slotPicker} value="">
            <option value="">Loading slots…</option>
          </Select>)}

        {shouldDisplaySlotPicker && isSlotPickingAvailable &&
          <Button
            className={styles.pickerSwitchButton}
            onClick={this.onSwitchToTimePickerClick}
          >
            Switch to custom time
          </Button>}

        <Button
          onClick={this.onSubmit} className={styles.submitButton}
          disabled={!isTimeInFuture}
        >
          {submitButtonCopy}
        </Button>

        {shouldDisplayTimezone &&
          <div className={styles.timezone}>{formattedTimezone}</div>}
      </div>
    );
  }
}

export default DateTimeSlotPicker;
