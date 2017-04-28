import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import { middleware as loginMiddleware } from '@bufferapp/login';
import {
  middleware as pendingUpdatesMiddleware,
} from '@bufferapp/pending-updates';
import reducers from './reducers';

export const history = createHistory();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = initialstate =>
  createStore(
    reducers,
    initialstate,
    composeEnhancers(
      applyMiddleware(loginMiddleware),
      applyMiddleware(pendingUpdatesMiddleware),
      applyMiddleware(routerMiddleware(history)),
    ),
  );

export default configureStore;
