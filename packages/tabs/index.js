
import { connect } from 'react-redux';
// load the presentational component
import TabNavigation from './components/TabNavigation';


// default export = container
export default connect(
  state => ({
    activeTabId: state.tabs.activeTabId,
    profileId: state.tabs.profileId,
  }),
)(TabNavigation);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
