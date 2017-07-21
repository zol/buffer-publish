import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import profiles from './mockData/profiles';
import lockedProfiles from './mockData/lockedProfiles';

export const actionTypes = {
  SELECT_PROFILE: 'SELECT_PROFILE',
};

const initialState = {
  selectedProfile: profiles[0],
  profiles,
  lockedProfiles,
};

const profileMapper = profile => ({
  id: profile.id,
  avatarUrl: profile.avatar,
  type: profile.service,
  handle: profile.service_username,
  notifications: profile.counts.pending,
  timezone: profile.timezone,
  schedules: profile.schedules,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case `profiles_${dataFetchActionTypes.FETCH_SUCCESS}`: {
      return {
        ...state,
        profiles: action.result
          .filter(profile => !profile.locked)
          .map(profileMapper),
        lockedProfiles: action.result
          .filter(profile => profile.locked)
          .map(profileMapper),
      };
    }
    case actionTypes.SELECT_PROFILE:
      return {
        ...state,
        selectedProfile: action.profile,
      };
    default:
      return state;
  }
};

export const actions = {
  selectProfile: ({ profile }) => ({
    type: actionTypes.SELECT_PROFILE,
    profile,
  }),
};
