import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import {
  listHeader,
} from './components/QueuedPosts/postData';

export const actionTypes = {
  POST_CREATED: 'POST_CREATED',
  POST_UPDATED: 'POST_UPDATED',
  POST_CONFIRM_DELETE: 'POST_CONFIRM_DELETE',
  POST_DELETED: 'POST_DELETED',
  POST_DELETE_CANCELED: 'POST_DELETE_CANCELED',
  POST_ERROR: 'POST_ERROR',
  QUEUED_POSTS_FORMATTED: 'QUEUED_POSTS_FORMATTED',
  REQUESTING_POST_DELETE: 'REQUESTING_POST_DELETE',
};

// TODO: remove this inial stubbed data once we can actually fetch data.
const initialState = {
  listHeader,
  loading: true,
  postLists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `queuedPosts_${dataFetchActionTypes.FETCH_START}`:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.QUEUED_POSTS_FORMATTED:
      return {
        ...state,
        loading: false,
        postLists: action.postLists,
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

export const actions = {
  postListFormatted: ({ postLists }) => ({
    type: actionTypes.QUEUED_POSTS_FORMATTED,
    postLists,
  }),
};
