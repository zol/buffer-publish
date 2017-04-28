import RPCClient from 'micro-rpc-client';
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
      default:
        break;
    }
    return next(action);
  };
};

export default middleware;
