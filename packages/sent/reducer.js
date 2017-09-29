import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes as profileSidebarActionTypes } from '@bufferapp/publish-profile-sidebar';
import { actionTypes as queueActionTypes } from '@bufferapp/publish-queue';
import {
  header,
} from './components/SentPosts/postData';

export const actionTypes = {
  POST_IMAGE_CLICKED: 'POST_IMAGE_CLICKED',
  POST_IMAGE_CLICKED_NEXT: 'POST_IMAGE_CLICKED_NEXT',
  POST_IMAGE_CLICKED_PREV: 'POST_IMAGE_CLICKED_PREV',
  POST_IMAGE_CLOSED: 'POST_IMAGE_CLOSED',
};

const initialState = {
  byProfileId: {},
};

const profileInitialState = {
  header,
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

const getProfileId = (action) => {
  if (action.profileId) { return action.profileId; }
  if (action.args) { return action.args.profileId; }
  if (action.profile) { return action.profile.id; }
};

const postReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.POST_IMAGE_CLICKED:
      return {
        ...state,
        isLightboxOpen: true,
        currentImage: 0,
      };
    case actionTypes.POST_IMAGE_CLOSED:
      return {
        ...state,
        isLightboxOpen: false,
      };
    case actionTypes.POST_IMAGE_CLICKED_NEXT:
      return {
        ...state,
        currentImage: state.currentImage + 1,
      };
    case actionTypes.POST_IMAGE_CLICKED_PREV:
      return {
        ...state,
        currentImage: state.currentImage - 1,
      };
    default:
      break;
  }
};

const postsReducer = (state, action) => {
  switch (action.type) {
    case queueActionTypes.POST_SENT:
      return [action.post, ...state];
    case actionTypes.POST_IMAGE_CLICKED:
    case actionTypes.POST_IMAGE_CLOSED:
    case actionTypes.POST_IMAGE_CLICKED_NEXT:
    case actionTypes.POST_IMAGE_CLICKED_PREV:
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
    case `sentPosts_${dataFetchActionTypes.FETCH_START}`:
      return {
        ...state,
        loading: !action.args.isFetchingMore,
        loadingMore: action.args.isFetchingMore,
      };
    case `sentPosts_${dataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        loadingMore: false,
        moreToLoad: determineIfMoreToLoad(action, state.posts),
        page: increasePageCount(state.page),
        posts: handlePosts(action, state.posts),
        total: action.result.total,
      };
    case `sentPosts_${dataFetchActionTypes.FETCH_FAIL}`:
      return {
        ...state,
        loading: false,
      };
    case queueActionTypes.POST_COUNT_UPDATED:
      return {
        ...state,
        total: action.counts.sent,
      };
    case queueActionTypes.POST_SENT:
    case actionTypes.POST_IMAGE_CLICKED:
    case actionTypes.POST_IMAGE_CLOSED:
    case actionTypes.POST_IMAGE_CLICKED_NEXT:
    case actionTypes.POST_IMAGE_CLICKED_PREV:
      return {
        ...state,
        posts: postsReducer(state.posts, action),
      };
    default:
      return state;
  }
};

export default (state = initialState, action) => {
  let profileId;
  switch (action.type) {
    case profileSidebarActionTypes.SELECT_PROFILE:
    case `sentPosts_${dataFetchActionTypes.FETCH_START}`:
    case `sentPosts_${dataFetchActionTypes.FETCH_SUCCESS}`:
    case `sentPosts_${dataFetchActionTypes.FETCH_FAIL}`:
    case queueActionTypes.POST_SENT:
    case queueActionTypes.POST_COUNT_UPDATED:
    case actionTypes.POST_IMAGE_CLICKED:
    case actionTypes.POST_IMAGE_CLICKED_NEXT:
    case actionTypes.POST_IMAGE_CLICKED_PREV:
    case actionTypes.POST_IMAGE_CLOSED:
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

export const actions = {
  handleImageClick: ({ post, profileId }) => ({
    type: actionTypes.POST_IMAGE_CLICKED,
    updateId: post.id,
    post,
    profileId,
  }),
  handleImageClickNext: ({ post, profileId }) => ({
    type: actionTypes.POST_IMAGE_CLICKED_NEXT,
    updateId: post.id,
    post,
    profileId,
  }),
  handleImageClickPrev: ({ post, profileId }) => ({
    type: actionTypes.POST_IMAGE_CLICKED_PREV,
    updateId: post.id,
    post,
    profileId,
  }),
  handleImageClose: ({ post, profileId }) => ({
    type: actionTypes.POST_IMAGE_CLOSED,
    updateId: post.id,
    post,
    profileId,
  }),
};
