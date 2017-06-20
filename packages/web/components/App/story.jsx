import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './index';

storiesOf('App')
  .add('should render application', () => (
    <App />
  ));
