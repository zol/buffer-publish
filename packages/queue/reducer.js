import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes as profileSidebarActionTypes } from '@bufferapp/publish-profile-sidebar';

export const actionTypes = {
  POST_CREATED: 'POST_CREATED',
  POST_UPDATED: 'POST_UPDATED',
  POST_CLICKED_DELETE: 'POST_CLICKED_DELETE',
  POST_CONFIRMED_DELETE: 'POST_CONFIRMED_DELETE',
  POST_DELETED: 'POST_DELETED',
  POST_CANCELED_DELETE: 'POST_CANCELED_DELETE',
  POST_ERROR: 'POST_ERROR',
};

const profileInitialState = {
  loading: true,
  loadingMore: false,
  moreToLoad: false,
  page: 1,
  posts: {},
  total: 0,
};

const handlePosts = (action, currentPosts) => {
  let posts = action.result.updates;
  if (action.args.isFetchingMore) {
    posts = { ...currentPosts, ...posts };
  }
  return posts;
};

const increasePageCount = (page) => {
  page += 1;
  return page;
};

const determineIfMoreToLoad = (action, currentPosts) => {
  const currentPostCount = Object.keys(currentPosts).length;
  const resultUpdatesCount = Object.keys(action.result.updates).length;
  return (action.result.total > (currentPostCount + resultUpdatesCount));
};

const postReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.POST_CLICKED_DELETE:
      state.isConfirmingDelete = true;
      return state;
    case actionTypes.POST_CONFIRMED_DELETE:
      state.isConfirmingDelete = false;
      state.isDeleting = true;
      return state;
    case actionTypes.POST_DELETED:
      var { [action.updateId]: deleted, ...currentState } = state; //eslint-disable-line
      currentState.isDeleting = false;
      return currentState;
    case actionTypes.POST_CANCELED_DELETE:
      state.isConfirmingDelete = false;
      return state;
    default:
      return state;
  }
};

const postsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.POST_CLICKED_DELETE:
      return {
        ...state,
        [action.updateId]: postReducer(state[action.updateId], action),
      };
    case actionTypes.POST_CONFIRMED_DELETE:
      return {
        ...state,
        [action.updateId]: postReducer(state[action.updateId], action),
      };
    case actionTypes.POST_DELETED:
      return {
        ...state,
        [action.updateId]: postReducer(state[action.updateId], action),
      };
    case actionTypes.POST_CANCELED_DELETE:
      return {
        ...state,
        [action.updateId]: postReducer(state[action.updateId], action),
      };
    default:
      return state;
  }
};

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
    case actionTypes.POST_CLICKED_DELETE:
      return {
        ...state,
        posts: postsReducer(state.posts, action),
      };
    case actionTypes.POST_CONFIRMED_DELETE:
      return {
        ...state,
        posts: postsReducer(state.posts, action),
      };
    case actionTypes.POST_DELETED:
      return {
        ...state,
        posts: postsReducer(state.posts, action),
      };
    case actionTypes.POST_CANCELED_DELETE:
      return {
        ...state,
        posts: postsReducer(state.posts, action),
      };
    case actionTypes.POST_ERROR:
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
    case actionTypes.POST_CLICKED_DELETE:
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
    case actionTypes.POST_CONFIRMED_DELETE:
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
    case actionTypes.POST_DELETED:
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
    case actionTypes.POST_CANCELED_DELETE:
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
    case actionTypes.POST_ERROR:
    default:
      return state;
  }
};

export const actions = {
  handleDeleteClick: ({ post, profileId }) => ({
    type: actionTypes.POST_CLICKED_DELETE,
    updateId: post.id,
    post,
    profileId,
  }),

  handleDeleteConfirmClick: ({ post, profileId }) => ({
    type: actionTypes.POST_CONFIRMED_DELETE,
    updateId: post.id,
    post,
    profileId,
  }),

  handleCancelConfirmClick: ({ post, profileId }) => ({
    type: actionTypes.POST_CANCELED_DELETE,
    updateId: post.id,
    post,
    profileId,
  }),
};
