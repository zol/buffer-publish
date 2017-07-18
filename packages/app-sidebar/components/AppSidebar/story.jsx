import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import AppSidebar from './index';

const translations = {};

storiesOf('AppSidebar')
  .addDecorator(checkA11y)
  .add('should show app sidebar', () => (
    <div style={{ width: '65px', height: '100%', display: 'flex' }}>
      <AppSidebar
        activeProduct="publish"
        translations={translations}
      />
    </div>
  ));
