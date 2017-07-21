export default ({ dispatch }) => next => (action) => { // eslint-disable-line no-unused-vars
  next(action);
  switch (action.type) {
    // case asyncDataActionTypes.FETCH_POSTS_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    default:
      break;
  }
};
