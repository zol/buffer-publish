import React from 'react';
import { storiesOf } from '@storybook/react';
import createStore from '@bufferapp/store';
import { Provider } from 'react-redux';
import { checkA11y } from 'storybook-addon-a11y';
import App from './index';

storiesOf('App')
  .addDecorator(checkA11y)
  .addDecorator(getStory =>
    <Provider store={createStore()}>
      {getStory()}
    </Provider>,
  )
  .add('should render application', () => (
    <App />
  ));
