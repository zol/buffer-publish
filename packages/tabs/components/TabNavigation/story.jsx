import React from 'react';
import {
  storiesOf,
  action,
} from '@storybook/react';
import TabNavigation from './index';

storiesOf('TabNavigation')
  .add('default', () => (
    <TabNavigation
      onTabClick={action('on-click')}
      activeTabId={'12345'}
    />
  ));
