import React from 'react';
import {
  action,
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTableColumn from './index';

const dayName = 'Monday';
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
const timesSingle = [
  {
    value: {
      hours: 9,
      minutes: 41,
    },
    onChange: action('on-change'),
    onRemoveTimeClick: action('on-remove-time-click'),
  },
];

const timesEmpty = [];

storiesOf('ScheduleTableColumn')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTableColumn
      dayName={dayName}
      times={times}
      onUpdateTime={action('on-update-time')}
    />
  ))
  .add('disabled', () => (
    <ScheduleTableColumn
      dayName={dayName}
      disabled
      times={times}
      onUpdateTime={action('on-update-time')}
    />
  ))
  .add('24-hour time setting', () => (
    <ScheduleTableColumn
      dayName={dayName}
      select24Hours
      times={times}
      onUpdateTime={action('on-update-time')}
    />
  ))
  .add('24-hour time setting, disabled', () => (
    <ScheduleTableColumn
      dayName={dayName}
      disabled
      select24Hours
      times={times}
      onUpdateTime={action('on-update-time')}
    />
  ))
  .add('single time', () => (
    <ScheduleTableColumn
      dayName={dayName}
      times={timesSingle}
      onUpdateTime={action('on-update-time')}
    />
  ))
  .add('without times', () => (
    <ScheduleTableColumn
      dayName={dayName}
      times={timesEmpty}
      onUpdateTime={action('on-update-time')}
    />
  ));
