import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import {
  days,
  settingsHeader,
  timezones,
} from './components/ProfileSettings/settingsData';

export const actionTypes = {
};

// TODO remove stubbed data once we have real data coming in
const initialState = {
  settingsHeader,
  loading: false,
  days,
  items: timezones,
  selectedProfile: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_PROFILE:
      return {
        ...state,
        loading: false,
        selectedProfile: action.result,
      };
    default:
      return state;
  }
};

export const actions = {};
