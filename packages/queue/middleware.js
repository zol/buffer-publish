import { actionTypes as profileActionTypes } from '@bufferapp/publish-profile-sidebar';

import {
  actions as dataFetchActions,
  actionTypes as dataFetchActionTypes,
} from '@bufferapp/async-data-fetch';
import { actions as notificationActions } from '@bufferapp/notifications';
import { actionTypes, actions } from './reducer';

export default ({ dispatch, getState }) => next => (action) => {
  next(action);
  switch (action.type) {
    case 'APP_INIT':
      dispatch(dataFetchActions.fetch({
        name: 'environment',
      }));
      break;
    case `user_${dataFetchActionTypes.FETCH_SUCCESS}`:
      dispatch(dataFetchActions.fetch({
        name: 'enabledApplicationModes',
      }));
      break;
    case profileActionTypes.SELECT_PROFILE:
      dispatch(dataFetchActions.fetch({
        name: 'queuedPosts',
        args: {
          profileId: action.profile.id,
          isFetchingMore: false,
        },
      }));
      break;
    case actionTypes.POST_CONFIRMED_DELETE:
      dispatch(dataFetchActions.fetch({
        name: 'deletePost',
        args: {
          updateId: action.updateId,
        },
      }));
      break;
    case actionTypes.POST_SHARE_NOW:
      dispatch(dataFetchActions.fetch({
        name: 'sharePostNow',
        args: {
          updateId: action.post.id,
          profileId: action.profileId,
        },
      }));
      break;
    case `sharePostNow_${dataFetchActionTypes.FETCH_SUCCESS}`:
      dispatch(notificationActions.createNotification({
        notificationType: 'success',
        message: 'Yay, your post has been shared! 🎉',
      }));
      break;
    case `sharePostNow_${dataFetchActionTypes.FETCH_FAIL}`:
      dispatch(notificationActions.createNotification({
        notificationType: 'error',
        message: action.error,
      }));
      break;

    /**
     * Watch for Pusher events to keep post counts up-to-date throughout the app.
     */
    case actionTypes.POST_CREATED:
    case actionTypes.POST_DELETED:
    case actionTypes.POST_SENT: {
      const state = getState();
      const { profileId } = action;
      const currentCounts = {
        pending: state.queue.byProfileId[profileId].total,
        sent: state.sent.byProfileId[profileId].total,
      };
      const changeMap = {
        [actionTypes.POST_CREATED]: { pending: 1, sent: 0 },
        [actionTypes.POST_DELETED]: { pending: -1, sent: 0 },
        [actionTypes.POST_SENT]: { pending: -1, sent: 1 },
      };
      const countChanges = changeMap[action.type];
      const newCounts = {
        pending: currentCounts.pending + countChanges.pending,
        sent: currentCounts.sent + countChanges.sent,
      };
      dispatch(actions.postCountUpdated(profileId, newCounts));
      break;
    }

    default:
      break;
  }
};
