import React from 'react';
import {
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Tab from './index';

storiesOf('Tab')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Tab routeTo={'/'}>Queue</Tab>
  ))
  .add('active', () => (
    <Tab routeTo={'/'}>Sent</Tab>
  ));
