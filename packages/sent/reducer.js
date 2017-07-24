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
  postLists: [],
};

const formatPostLists = (posts) => {
  const postLists = [];
  let day;
  let newList;

  for (let i = 0; i < posts.length; i++) { // eslint-disable-line
    if (posts[i].day !== day) {
      day = posts[i].day;
      newList = { listHeader: day, posts: [posts[i]] };
      postLists.push(newList);
    } else { // if same day add to posts array of current list
      newList.posts.push(posts[i]);
    }
  }

  return postLists;
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
        postLists: formatPostLists(action.result),
      };
    case `sentPosts_${dataFetchActionTypes.FETCH_FAIL}`:
      return state;
    default:
      return state;
  }
};

export const actions = {
};
