import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import {
  header,
} from './components/SentPosts/postData';

export const actionTypes = {
  SENT_POSTS_FORMATTED: 'SENT_POSTS_FORMATTED',
};

// TODO remove stubbed data once we have real data coming in
const initialState = {
  header,
  loading: false,
  postLists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `sentPosts_${dataFetchActionTypes.FETCH_START}`:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SENT_POSTS_FORMATTED:
      return {
        ...state,
        loading: false,
        postLists: action.postLists,
      };
    case `sentPosts_${dataFetchActionTypes.FETCH_FAIL}`:
      return state;
    default:
      return state;
  }
};

export const actions = {
  postListFormatted: ({ postLists }) => ({
    type: actionTypes.SENT_POSTS_FORMATTED,
    postLists,
  }),
};
