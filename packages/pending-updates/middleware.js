import RPCClient from 'micro-rpc-client';
import { getSession } from '@bufferapp/login';
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
      case actionTypes.FETCH_PENDING_UPDATES:
        rpc.call('updates/pending', {
          profileId: action.profileId,
          token: getSession().token,
        })
          .then(pendingUpdates => pendingUpdates.updates)
          .then(pendingUpdates =>
            store.dispatch(actions.setPendingUpdates({
              pendingUpdates,
            })))
          .catch((err) => {
            console.error(err); // eslint-disable-line no-console
          });
        break;
      default:
        break;
    }
    return next(action);
  };
};

export default middleware;
