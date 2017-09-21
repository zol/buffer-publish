import React from 'react';
import {
  action,
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTable from './index';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const times = [
  {
    value: {
      hours: 9,
      minutes: 41,
    },
    onChange: action('on-change'),
    onRemoveTimeClick: action('on-remove-time-click'),
  },
  {
    value: {
      hours: 19,
      minutes: 0,
    },
    onChange: action('on-change'),
    onRemoveTimeClick: action('on-remove-time-click'),
  },
];
const singleTime = [
  {
    value: {
      hours: 9,
      minutes: 41,
    },
    onChange: action('on-change'),
    onRemoveTimeClick: action('on-remove-time-click'),
  },
];
const noTimes = [];

const days = [];
const daysSingleTime = [];
const daysNoTimes = [];

daysOfWeek.forEach((dayName) => {
  days.push({
    dayName,
    postingTimesTotal: times.length,
    times,
  });
  daysSingleTime.push({
    dayName,
    postingTimesTotal: singleTime.length,
    times: singleTime,
  });
  daysNoTimes.push({
    dayName,
    postingTimesTotal: noTimes.length,
    times: noTimes,
  });
});

storiesOf('ScheduleTable')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTable
      days={days}
      onUpdateTime={action('on-update-time')}
    />
  ))
  .add('disabled', () => (
    <ScheduleTable
      days={days}
      disabled
      onUpdateTime={action('on-update-time')}
    />
  ))
  .add('24-hour time setting', () => (
    <ScheduleTable
      days={days}
      select24Hours
      onUpdateTime={action('on-update-time')}
    />
  ))
  .add('24-hour time setting, disabled', () => (
    <ScheduleTable
      days={days}
      disabled
      select24Hours
      onUpdateTime={action('on-update-time')}
    />
  ))
  .add('single time', () => (
    <ScheduleTable
      days={daysSingleTime}
      onUpdateTime={action('on-update-time')}
    />
  ))
  .add('no times', () => (
    <ScheduleTable
      days={daysNoTimes}
      onUpdateTime={action('on-update-time')}
    />
  ));
