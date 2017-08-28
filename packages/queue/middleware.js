import { actionTypes } from '@bufferapp/publish-profile-sidebar';
import { actions as dataFetchActions } from '@bufferapp/async-data-fetch';
import { actionTypes as queueActionTypes } from './reducer';

export default ({ dispatch }) => next => (action) => { // eslint-disable-line no-unused-vars
  next(action);
  switch (action.type) {
    case actionTypes.SELECT_PROFILE:
      dispatch(dataFetchActions.fetch({
        name: 'queuedPosts',
        args: {
          profileId: action.profile.id,
          isFetchingMore: false,
        },
      }));
      break;
    case queueActionTypes.POST_CONFIRMED_DELETE:
      dispatch(dataFetchActions.fetch({
        name: 'deletePost',
        args: {
          updateId: action.updateId,
        },
      }));
      break;
    default:
      break;
  }
};
