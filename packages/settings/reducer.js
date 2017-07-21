
import { actionTypes } from '@bufferapp/profile-sidebar';
import {
  settingsHeader,
  timezones,
} from './components/ProfileSettings/settingsData';
import transformSchedules from './utils/transformSchedule';

// TODO remove stubbed data once we have real data coming in
const initialState = {
  settingsHeader,
  loading: false,
  days: [],
  items: timezones,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_PROFILE:
      return {
        ...state,
        loading: false,
        days: transformSchedules(action.profile.schedules),
      };
    default:
      return state;
  }
};

export const actions = {};
