import React from 'react';
import {
  action,
  storiesOf,
} from '@storybook/react';
import uuid from 'uuid';
import { checkA11y } from 'storybook-addon-a11y';
import Tabs from './index';
import Tab from '../Tab/index';

storiesOf('Tabs')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Tabs
      activeTabId={''}
      onTabClick={action('on-tab-click')}
    >
      <Tab tabId={uuid()}>Queue (1)</Tab>
      <Tab tabId={uuid()}>Sent Posts</Tab>
      <Tab tabId={uuid()}>Settings</Tab>
    </Tabs>
  ))
  .add('with one active tab', () => (
    <Tabs
      activeTabId={'12345'}
      onTabClick={action('on-tab-click')}
    >
      <Tab tabId={'12345'}>Queue (1)</Tab>
      <Tab tabId={uuid()}>Sent Posts</Tab>
      <Tab tabId={uuid()}>Settings</Tab>
    </Tabs>
  ));
