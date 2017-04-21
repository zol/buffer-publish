import React from 'react';
import ReactDOM from 'react-dom';
import '@bufferapp/components/variables.css';
import { Provider } from 'react-redux';
import createStore from '@bufferapp/store';

import App from './components/App';


ReactDOM.render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
