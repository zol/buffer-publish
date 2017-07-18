import React from 'react';
import {
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Tab from './index';

storiesOf('Tab')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Tab route={'/'}>Queue</Tab>
  ))
  .add('active', () => (
    <Tab route={'/'}>Sent</Tab>
  ));
