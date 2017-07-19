import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import {
  listHeader,
} from './components/QueuedPosts/postData';
import postsMapper from './utils/postParser';

export const actionTypes = {
  POST_CREATED: 'POST_CREATED',
  POST_UPDATED: 'POST_UPDATED',
  POST_CONFIRM_DELETE: 'POST_CONFIRM_DELETE',
  POST_DELETED: 'POST_DELETED',
  POST_DELETE_CANCELED: 'POST_DELETE_CANCELED',
  POST_ERROR: 'POST_ERROR',
  REQUESTING_POST_DELETE: 'REQUESTING_POST_DELETE',
};

// TODO: remove this inial stubbed data once we can actually fetch data.
const initialState = {
  listHeader,
  loading: true,
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `queuedPosts_${dataFetchActionTypes.FETCH_START}`:
      return {
        ...state,
        loading: true,
      };
    case `queuedPosts_${dataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        posts: action.result.updates.map(postsMapper),
      };
    case `queuedPosts_${dataFetchActionTypes.FETCH_FAIL}`:
      return state;
    case actionTypes.POST_CREATED:
      return state;
    case actionTypes.POST_UPDATED:
      return state;
    case actionTypes.POST_CONFIRM_DELETE:
      return state;
    case actionTypes.POST_DELETED:
      return state;
    case actionTypes.POST_DELETE_CANCELED:
      return state;
    case actionTypes.POST_ERROR:
      return state;
    case actionTypes.REQUESTING_POST_DELETE:
      return state;
    default:
      return state;
  }
};

export const actions = {};
