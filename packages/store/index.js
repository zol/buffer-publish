import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import loginMiddleware from './loginMiddleware';
import reducers from './reducers';

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
    ),
  );

export default configureStore;
