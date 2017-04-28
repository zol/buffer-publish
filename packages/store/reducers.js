import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import {
  selectors as pendingUpdatesSelectors,
  reducer as pendingUpdatesReducer,
} from '@bufferapp/pending-updates';

export default combineReducers({
  form: formReducer,
  router: routerReducer,
  [pendingUpdatesSelectors.key]: pendingUpdatesReducer,
});
