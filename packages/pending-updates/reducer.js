const ROOT_KEY = 'PENDING_UPDATES';

export const actionTypes = {
  SET_PENDING_UPDATES: 'SET_PENDING_UPDATES',
  FETCH_PENDING_UPDATES: 'FETCH_PENDING_UPDATES',
};

export const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_PENDING_UPDATES:
      return action.pendingUpdates;
    default:
      return state;
  }
};

export const actions = {
  setPendingUpdates: ({ pendingUpdates }) => ({
    type: actionTypes.SET_PENDING_UPDATES,
    pendingUpdates,
  }),
  fetchPendingUpdates: ({ profileId }) => ({
    type: actionTypes.FETCH_PENDING_UPDATES,
    profileId,
  }),
};

export const selectors = {
  key: ROOT_KEY,
  getPendingUpdates: store => store[ROOT_KEY],
};
