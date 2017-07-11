import React from 'react';
import {
  action,
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Tab from './index';

storiesOf('Tab')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Tab
      onClick={action('tab-click')}
      active={false}
    >
      Queue
    </Tab>
  ))
  .add('active', () => (
    <Tab
      onClick={action('tab-click')}
      active
    >
      Sent
    </Tab>
  ));
