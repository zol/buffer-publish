import { actionTypes } from '@bufferapp/profile-sidebar';
import {
  actions as dataFetchActions,
  actionTypes as dataFetchActionTypes,
} from '@bufferapp/async-data-fetch';
import { actions } from './reducer';

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

export default ({ dispatch }) => next => (action) => { // eslint-disable-line no-unused-vars
  next(action);
  switch (action.type) {
    case actionTypes.SELECT_PROFILE:
      dispatch(dataFetchActions.fetch({
        name: 'sentPosts',
        args: {
          profileId: action.profile.id,
        },
      }));
      break;
    case `sentPosts_${dataFetchActionTypes.FETCH_SUCCESS}`:
      dispatch(actions.postListFormatted({
        postLists: formatPostLists(action.result),
      }));
      break;
    default:
      break;
  }
};
