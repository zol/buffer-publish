// import { actionTypes as asyncDataActionTypes } from '@bufferapp/async-data-fetch';
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
    // case asyncDataActionTypes.FETCH_POSTS_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    default:
      return state;
  }
};

export const actions = {};
