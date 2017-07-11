import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { reducer as loginReducer } from '@bufferapp/login';
import { reducer as exampleReducer } from '@bufferapp/example';
import { reducer as tabsReducer } from '@bufferapp/tabs';
import { reducer as i18nReducer } from '@bufferapp/publish-i18n';
import { reducer as asyncDataFetchReducer } from '@bufferapp/async-data-fetch';

export default combineReducers({
  form: formReducer,
  login: loginReducer,
  router: routerReducer,
  example: exampleReducer,
  i18n: i18nReducer,
  tabs: tabsReducer,
  asyncDataFetch: asyncDataFetchReducer,
});
