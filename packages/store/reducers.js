import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { reducer as exampleReducer } from '@bufferapp/example';

export default combineReducers({
  form: formReducer,
  router: routerReducer,
  example: exampleReducer,
});
