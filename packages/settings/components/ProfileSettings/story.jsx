import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ProfileSettings from './index';
import {
  settingsHeader,
} from './settingsData';

storiesOf('ProfileSettings')
  .addDecorator(checkA11y)
  .add('default', () => (
    <ProfileSettings
      settingsHeader={settingsHeader}
    />
  ));
