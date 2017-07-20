import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import {
  header,
  imagePosts,
  listHeader,
} from './components/SentPosts/postData';

export const actionTypes = {
};

// TODO remove stubbed data once we have real data coming in
const initialState = {
  header,
  listHeader,
  loading: false,
  posts: imagePosts,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `sentPosts_${dataFetchActionTypes.FETCH_START}`:
      return {
        ...state,
        loading: true,
      };
    case `sentPosts_${dataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        posts: action.result,
      };
    case `sentPosts_${dataFetchActionTypes.FETCH_FAIL}`:
      return state;
    default:
      return state;
  }
};

export const actions = {};
