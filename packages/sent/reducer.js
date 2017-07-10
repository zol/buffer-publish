// import { actionTypes as asyncDataActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {
};

const initialState = {
  loading: false,
  posts: [],
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
