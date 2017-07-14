import profiles from './mockData/profiles';
import lockedProfiles from './mockData/lockedProfiles';

export const actionTypes = {};

const initialState = {
  profiles,
  lockedProfiles,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const actions = {};
