export const actionTypes = {
  SET_PENDING_UPDATES: 'SET_PENDING_UPDATES',
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
};
