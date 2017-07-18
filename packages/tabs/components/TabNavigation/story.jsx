import React from 'react';
import {
  storiesOf,
} from '@storybook/react';
import TabNavigation from './index';

storiesOf('TabNavigation')
  .add('default', () => (
    <TabNavigation profileId={'12345'} />
  ));
