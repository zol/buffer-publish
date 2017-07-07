// import { actionTypes as asyncDataActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  FETCH_POSTS_START: 'FETCH_POSTS_START',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',
  POST_CREATED: 'POST_CREATED',
  POST_UPDATED: 'POST_UPDATED',
  POST_CONFIRM_DELETE: 'POST_CONFIRM_DELETE',
  POST_DELETED: 'POST_DELETED',
  POST_DELETE_CANCELED: 'POST_DELETE_CANCELED',
  POST_ERROR: 'POST_ERROR',
  REQUESTING_POST_DELETE: 'REQUESTING_POST_DELETE',
};

const initialState = {
  loading: false,
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // asyncDataActionTypes.FETCH_POSTS_START
    case actionTypes.FETCH_POSTS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };
    case actionTypes.FETCH_POSTS_ERROR:
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
