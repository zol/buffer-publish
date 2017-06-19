import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createStore, { history } from '@bufferapp/store';
import Routes from './routes';

const store = createStore();

const renderApp = (RoutesComponent) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <RoutesComponent history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

renderApp(Routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default; // eslint-disable-line global-require
    renderApp(nextRoutes);
  });
}
