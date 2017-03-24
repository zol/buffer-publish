import { connect } from 'react-redux';
import PendingUpdates from './components';
import { selectors } from './reducer';

export default connect(
  store => ({
    updates: selectors.getPendingUpdates(store),
  }),
)(PendingUpdates);

export { reducer, actions, actionTypes, selectors } from './reducer';
