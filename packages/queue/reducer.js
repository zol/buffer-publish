import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes as profileSidebarActionTypes } from '@bufferapp/profile-sidebar';

export const actionTypes = {
  POST_CREATED: 'POST_CREATED',
  POST_UPDATED: 'POST_UPDATED',
  POST_CONFIRM_DELETE: 'POST_CONFIRM_DELETE',
  POST_DELETED: 'POST_DELETED',
  POST_DELETE_CANCELED: 'POST_DELETE_CANCELED',
  POST_ERROR: 'POST_ERROR',
  REQUESTING_POST_DELETE: 'REQUESTING_POST_DELETE',
};

const profileInitialState = {
  loading: true,
  loadingMore: false,
  moreToLoad: false,
  page: 1,
  posts: [],
  total: 0,
};

const handlePosts = (action, currentPosts) => {
  let posts = action.result.updates;
  if (action.args.isFetchingMore) {
    posts = [...currentPosts, ...posts];
  }
  return posts;
};

const increasePageCount = (page) => {
  page += 1;
  return page;
};

const determineIfMoreToLoad = (action, currentPosts) =>
  (action.result.total > (currentPosts.length + action.result.updates.length));

const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case profileSidebarActionTypes.SELECT_PROFILE:
      return profileInitialState;
    case `queuedPosts_${dataFetchActionTypes.FETCH_START}`:
      return {
        ...state,
        loading: !action.args.isFetchingMore,
        loadingMore: action.args.isFetchingMore,
      };
    case `queuedPosts_${dataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        loadingMore: false,
        moreToLoad: determineIfMoreToLoad(action, state.posts),
        page: increasePageCount(state.page),
        posts: handlePosts(action, state.posts),
        total: action.result.total,
      };
    case `queuedPosts_${dataFetchActionTypes.FETCH_FAIL}`:
      return {
        ...state,
        loading: false,
      };
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

const initialState = {
  byProfileId: {},
};

const getProfileId = (action) => {
  if (action.profileId) { return action.profileId; }
  if (action.args) { return action.args.profileId; }
  if (action.profile) { return action.profile.id; }
};

export default (state = initialState, action) => {
  let profileId;
  switch (action.type) {
    case profileSidebarActionTypes.SELECT_PROFILE:
    case `queuedPosts_${dataFetchActionTypes.FETCH_START}`:
    case `queuedPosts_${dataFetchActionTypes.FETCH_SUCCESS}`:
    case `queuedPosts_${dataFetchActionTypes.FETCH_FAIL}`:
    case actionTypes.POST_CREATED:
    case actionTypes.POST_UPDATED:
    case actionTypes.POST_CONFIRM_DELETE:
    case actionTypes.POST_DELETED:
    case actionTypes.POST_DELETE_CANCELED:
    case actionTypes.POST_ERROR:
    case actionTypes.REQUESTING_POST_DELETE:
      profileId = getProfileId(action);
      if (profileId) {
        return {
          byProfileId: {
            ...state.byProfileId,
            [profileId]: profileReducer(state.byProfileId[profileId], action),
          },
        };
      }
      return state;
    default:
      return state;
  }
};

export const actions = {};
