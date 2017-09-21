import { actions as dataFetchActions } from '@bufferapp/async-data-fetch';
import { actionTypes } from './reducer';

const transformScheduleForApi = (unformattedSchedule, action) => {
  if (!Array.isArray(unformattedSchedule)) return [];

  unformattedSchedule.forEach((scheduleItem) => {
    if (scheduleItem.days.includes(action.dayName)) {
      scheduleItem.times[action.timeIndex] = `${action.hours}:${action.minutes}`;
    }
  });

  return unformattedSchedule;
};

export default ({ dispatch, getState }) => next => (action) => {
  next(action);
  switch (action.type) {
    case actionTypes.UPDATE_SCHEDULE_TIME:
      dispatch(dataFetchActions.fetch({
        name: 'updateSchedule',
        args: {
          profileId: action.profileId,
          schedules: transformScheduleForApi(getState().settings.schedules, action),
        },
      }));
      break;
    default:
      break;
  }
};
