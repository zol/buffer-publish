import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import {
  reducer as formReducer,
} from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ProfileSettings from './index';
import {
  settingsHeader,
  days,
} from './settingsData';

const store = createStore(combineReducers({ form: formReducer }));

storiesOf('ProfileSettings')
  .addDecorator(checkA11y)
  .addDecorator(getStory =>
    <Provider store={store}>
      {getStory()}
    </Provider>,
  )
  .add('default', () => (
    <ProfileSettings
      settingsHeader={settingsHeader}
      days={days}
    />
  ));
