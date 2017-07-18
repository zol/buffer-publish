// import { actionTypes as asyncDataActionTypes } from '@bufferapp/async-data-fetch';
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
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case asyncDataActionTypes.FETCH_POSTS_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    default:
      return state;
  }
};

export const actions = {};
