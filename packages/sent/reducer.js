import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';
import {
  header,
} from './components/SentPosts/postData';

export const actionTypes = {
};

// TODO remove stubbed data once we have real data coming in
const initialState = {
  header,
  loading: false,
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

export default (state = initialState, action) => {
  switch (action.type) {
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
      return state;
    default:
      return state;
  }
};

export const actions = {
};
