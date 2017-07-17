import React from 'react';
import createStore from '@bufferapp/store';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ProfilePage from './index';

storiesOf('ProfilePage')
  .addDecorator(checkA11y)
  .addDecorator(getStory =>
    <Provider store={createStore()}>
      {getStory()}
    </Provider>,
  )
  .add('should render', () => (
    <ProfilePage
      match={{
        params: {
          profileId: 'someProfileId',
          tabId: 'someTabId',
        },
      }}
    />
  ))
  .add('should render settings', () => (
    <ProfilePage
      match={{
        params: {
          profileId: 'someProfileId',
          tabId: 'settings',
        },
      }}
    />
  ));
