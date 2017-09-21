import React from 'react';
import {
  action,
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ScheduleTableCell from './index';

const dayName = 'Monday';
const timeIndex = 0;

const time = {
  value: {
    hours: 19,
    minutes: 41,
  },
  onChange: action('on-change'),
  onRemoveTimeClick: action('on-remove-time-click'),
};

storiesOf('ScheduleTableCell')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ScheduleTableCell
      time={time}
      onUpdateTime={action('on-update-time')}
      dayName={dayName}
      timeIndex={timeIndex}
    />
  ))
  .add('disabled', () => (
    <ScheduleTableCell
      disabled
      time={time}
      onUpdateTime={action('on-update-time')}
      dayName={dayName}
      timeIndex={timeIndex}
    />
  ))
  .add('24-hour time setting', () => (
    <ScheduleTableCell
      select24Hours
      time={time}
      onUpdateTime={action('on-update-time')}
      dayName={dayName}
      timeIndex={timeIndex}
    />
  ))
  .add('24-hour time setting, disabled', () => (
    <ScheduleTableCell
      disabled
      select24Hours
      time={time}
      onUpdateTime={action('on-update-time')}
      dayName={dayName}
      timeIndex={timeIndex}
    />
  ));
