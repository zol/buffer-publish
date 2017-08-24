import Pusher from 'pusher-js';
import { actionTypes as profileSidebarActionTypes } from '@bufferapp/publish-profile-sidebar';

const PUSHER_APP_KEY = 'bd9ba9324ece3341976e';

const profileEventActionMap = {
  added_update: 'POST_CREATED',
  sent_update: 'POST_SENT',
  deleted_update: 'POST_DELETED',
  updated_update: 'POST_UPDATED',
  // collaboration_draft_approved: '',
  // collaboration_draft_updated: '',
};


const bindProfileEvents = (channel, profileId, dispatch) => {
  Object.entries(profileEventActionMap).forEach(([pusherEvent, actionType]) => {
    channel.bind(pusherEvent, (data) => {
      dispatch({
        type: actionType,
        payload: data,
      });
    });
  });
};

export default ({ dispatch }) => {
  const pusher = new Pusher(PUSHER_APP_KEY, { authEndpoint: '/pusher/auth' }); // eslint-disable-line
  const channelsByProfileId = {};

  return next => (action) => {
    next(action);
    if (action.type === profileSidebarActionTypes.SELECT_PROFILE) {
      const { profileId } = action;
      if (profileId) {
        if (!channelsByProfileId[profileId]) {
          const channelName = `private-updates-${profileId}`;
          channelsByProfileId[profileId] = pusher.subscribe(channelName);
          bindProfileEvents(channelsByProfileId[profileId], profileId, dispatch);
        }
      }
    }
  };
};
