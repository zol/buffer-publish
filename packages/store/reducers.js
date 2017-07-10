import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { reducer as exampleReducer } from '@bufferapp/example';
import { reducer as tabsReducer } from '@bufferapp/tabs';
import { reducer as i18nReducer } from '@bufferapp/publish-i18n';

export default combineReducers({
  form: formReducer,
  router: routerReducer,
  example: exampleReducer,
  i18n: i18nReducer,
  tabs: tabsReducer,
});
