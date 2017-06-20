import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import LoggedIn from './index';


storiesOf('LoggedIn')
  .addDecorator(checkA11y)
  .add('should show user is logged in', () => (
    <LoggedIn loggedIn />
  ))
  .add('should show user is not logged in', () => (
    <LoggedIn />
  ));
