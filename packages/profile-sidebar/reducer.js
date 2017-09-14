import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  SELECT_PROFILE: 'SELECT_PROFILE',
};

const initialState = {
  profiles: [],
  lockedProfiles: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `profiles_${dataFetchActionTypes.FETCH_START}`:
      return {
        ...state,
        loading: true,
      };
    case `profiles_${dataFetchActionTypes.FETCH_SUCCESS}`: {
      return {
        ...state,
        loading: false,
        profiles: action.result
          .filter(profile => !profile.disabled),
        lockedProfiles: action.result
          .filter(profile => profile.disabled),
      };
    }
    case actionTypes.SELECT_PROFILE: {
      return {
        ...state,
        profiles: state.profiles
          .map(profile => ({
            ...profile,
            open: profile.id === action.profileId,
          })),
      };
    }
    default:
      return state;
  }
};

export const actions = {
  selectProfile: ({ profile }) => ({
    type: actionTypes.SELECT_PROFILE,
    profileId: profile.id,
    profile,
  }),
};
