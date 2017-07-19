import React from 'react';
import createStore from '@bufferapp/store';
import {
  ConnectedRouter as Router,
} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ProfilePage from './index';

const history = createHistory();

storiesOf('ProfilePage')
  .addDecorator(checkA11y)
  .addDecorator(getStory =>
    <Provider store={createStore()}>
      <Router history={history}>
        {getStory()}
      </Router>
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
