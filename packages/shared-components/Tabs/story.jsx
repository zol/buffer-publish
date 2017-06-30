import React from 'react';
import {
  action,
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Tabs from './index';

const tabs = [
  { title: 'Queue (1)', onClick: action('tab-click'), active: false },
  { title: 'Sent Posts', onClick: action('tab-click'), active: false },
  { title: 'Settings', onClick: action('tab-click'), active: false },
];

storiesOf('Tabs')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Tabs tabs={tabs} />
  ));
