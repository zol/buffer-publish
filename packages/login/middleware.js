import RPCClient from 'micro-rpc-client';
import { push } from 'react-router-redux';
import localStore from 'store';
import {
  actionTypes,
  actions,
} from './';


const middleware = (store) => {
  const rpc = new RPCClient({
    serverUrl: 'https://rpc.local.buffer.com',
  });
  return next => (action) => {
    switch (action.type) {
      case actionTypes.LOGIN_START:
        rpc.call('login', {
          email: action.email,
          password: action.password,
        })
          .then(({ token }) => {
            store.dispatch(actions.loginSuccess({
              sessionToken: token,
            }));
          })
          .catch((err) => {
            store.dispatch(actions.loginFail({
              errorMessage: err.message,
            }));
          });
        break;
      case actionTypes.LOGIN_SUCCESS:
        localStore.set('session', {
          token: action.sessionToken,
        });
        // TODO: if there was an entry url route to that
        store.dispatch(push('/'));
        break;
      default:
        break;
    }
    return next(action);
  };
};

export default middleware;
