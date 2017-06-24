import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createStore, { history } from '@bufferapp/store';
import { actions } from '@bufferapp/login';
import Routes from './routes';

const store = createStore();

// TODO: remove thse after login service has been implemented
window.login = ({
  email,
  password,
  clientId,
  clientSecret,
}) => store.dispatch(actions.loginStart({
  email,
  password,
  clientId,
  clientSecret,
}));
window.logout = () => store.dispatch(actions.logout());


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
