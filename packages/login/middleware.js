import RPCClient from 'micro-rpc-client';
import Cookie from 'js-cookie';
import {
  actions,
  actionTypes,
} from './';

const middleware = (store) => {
  const rpc = new RPCClient({ serverUrl: '/rpc' });
  return next => (action) => {
    switch (action.type) {
      case actionTypes.LOGIN_START:
        rpc.call('login', {
          email: action.email,
          password: action.password,
          clientId: action.clientId,
          clientSecret: action.clientSecret,
        })
          .then(({ token }) => store.dispatch(actions.loginSuccess({ sessionToken: token })))
          .catch(errorMessage => store.dispatch(actions.loginFail({ errorMessage })));
        break;
      case actionTypes.LOGIN_SUCCESS:
        Cookie.set('session', {
          token: action.sessionToken,
        }, {
          domain: '.buffer.com',
        });
        break;
      case actionTypes.LOGIN_FAIL:
      case actionTypes.LOGOUT:
        if (action.errorMessage) {
          console.error(action.errorMessage); // eslint-disable-line no-console
        }
        console.log('Removing Session Cookie'); // eslint-disable-line no-console
        Cookie.remove('session', {
          domain: '.buffer.com',
        });
        break;
      default:
        break;
    }
    return next(action);
  };
};

export default middleware;
