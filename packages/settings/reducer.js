
import { actionTypes as profileActionTypes } from '@bufferapp/profile-sidebar';
import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import {
  settingsHeader,
  timezones,
} from './components/ProfileSettings/settingsData';
import transformSchedules from './utils/transformSchedule';

export const actionTypes = {
};
// TODO remove stubbed data once we have real data coming in
const initialState = {
  settingsHeader,
  loading: false,
  days: [],
  items: timezones,
  profileTimezone: 'Europe/London',
  hasTwentyFourHourTimeFormat: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case profileActionTypes.SELECT_PROFILE:
      return {
        ...state,
        loading: false,
        days: transformSchedules(action.profile.schedules),
        profileTimezone: action.profile.timezone,
      };
    case `user_${dataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        hasTwentyFourHourTimeFormat: action.result.hasTwentyFourHourTimeFormat,
      };
    default:
      return state;
  }
};

export const actions = {};
