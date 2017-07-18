import React from 'react';
import {
  action,
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Tabs from './index';
import Tab from '../Tab/index';
import DropdownTab from '../DropdownTab/index';
import DropdownItem from '../DropdownItem/index';

storiesOf('Tabs')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Tabs>
      <Tab route={'/'}>Queue (1)</Tab>
      <Tab route={'/'}>Sent Posts</Tab>
      <Tab route={'/'}>Settings</Tab>
    </Tabs>
  ))
  .add('with one active tab', () => (
    <Tabs>
      <Tab route={'/'}>Queue (1)</Tab>
      <Tab route={'/'}>Sent Posts</Tab>
      <Tab route={'/'}>Settings</Tab>
    </Tabs>
  ))
  .add('with a dropdown tab', () => (
    <Tabs>
      <Tab route={'/'}>Queue (1)</Tab>
      <Tab route={'/'}>Sent Posts</Tab>
      <DropdownTab
        active
        title={'Settings'}
        isDropdownShown
        onClick={action('on-click')}
      >
        <DropdownItem onClick={action('on-click')}>Posting Schedule</DropdownItem>
        <DropdownItem onClick={action('on-click')}>Empty your Queue</DropdownItem>
        <DropdownItem onClick={action('on-click')}>Disconnect this account</DropdownItem>
      </DropdownTab>
    </Tabs>
  ));
