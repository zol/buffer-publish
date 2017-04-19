import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import LoginForm from './index';

const store = createStore(combineReducers({ form: formReducer }));

storiesOf('LoginForm')
  .addDecorator(getStory =>
    <Provider store={store}>
      {getStory()}
    </Provider>,
  )
  .add('LoginForm', () => (
    <LoginForm />
  ));
