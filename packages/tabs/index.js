
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
// load the presentational component
import TabNavigation from './components/TabNavigation';


// default export = container
export default connect(
  state => ({
    activeTabId: state.tabs.activeTabId,
    profileId: state.tabs.profileId,
  }),
  dispatch => ({
    onTabClick: (tabId, profileId) => dispatch(push(`/profile/${profileId}/tab/${tabId}`)),
  }),
)(TabNavigation);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
