export const SET_PENDING_UPDATES = 'SET_PENDING_UPDATES';

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_PENDING_UPDATES:
      return action.pendingUpdates;
    default:
      return state;
  }
};

export default reducer;
