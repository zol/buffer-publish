import RPCClient from 'micro-rpc-client';
import {
  actions,
  actionTypes,
} from './';


export default (store) => {
  let counter = 0;
  const rpc = new RPCClient({ url: '/rpc' });
  return next => (action) => {
    switch (action.type) {
      case actionTypes.FETCH: {
        const id = counter++; // eslint-disable-line no-plusplus
        store.dispatch(actions.fetchStart({
          name: action.name,
          args: action.args,
          id,
        }));
        rpc.call(action.name, action.args)
          .then(result => store.dispatch(actions.fetchSuccess({
            name: action.name,
            args: action.args,
            id,
            result,
          })))
          .catch(error => store.dispatch(actions.fetchFail({
            name: action.name,
            args: action.args,
            id,
            error: error.message,
          })));
        break;
      }
      default:
        break;
    }
    return next(action);
  };
};
