
import { actionTypes as profileActionTypes } from '@bufferapp/publish-profile-sidebar';
import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import {
  timezones,
} from './components/ProfileSettings/settingsData';
import transformSchedules from './utils/transformSchedule';

export const actionTypes = {
  REMOVE_SCHEDULE_TIME: 'REMOVE_SCHEDULE_TIME',
  UPDATE_SCHEDULE_TIME: 'UPDATE_SCHEDULE_TIME',
};

// TODO remove stubbed data once we have real data coming in
const initialState = {
  settingsHeader: 'Your posting schedule',
  loading: false,
  days: [],
  schedules: [],
  items: timezones,
  profileTimezone: '',
  hasTwentyFourHourTimeFormat: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case profileActionTypes.SELECT_PROFILE:
      return {
        ...state,
        loading: false,
        days: transformSchedules(action.profile.schedules),
        schedules: action.profile.schedules,
        profileTimezone: action.profile.timezone,
        settingsHeader: `Your posting schedule for ${action.profile.serviceUsername}`,
      };
    case `user_${dataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        hasTwentyFourHourTimeFormat: action.result.hasTwentyFourHourTimeFormat,
      };
    case `updateSchedule_${dataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        days: transformSchedules(action.result.schedules),
        schedules: action.result.schedules,
      };
    case actionTypes.UPDATE_SCHEDULE_TIME:
      return state;
    default:
      return state;
  }
};

export const actions = {
  handleRemoveTimeClick: ({ hours, minutes, dayName, profileId, timeIndex }) => ({
    type: actionTypes.REMOVE_SCHEDULE_TIME,
    hours,
    minutes,
    timeIndex,
    dayName,
    profileId,
  }),
  handleUpdateTime: ({ hours, minutes, dayName, profileId, timeIndex }) => ({
    type: actionTypes.UPDATE_SCHEDULE_TIME,
    hours,
    minutes,
    timeIndex,
    dayName,
    profileId,
  }),
};
