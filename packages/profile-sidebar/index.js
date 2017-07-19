import { connect } from 'react-redux';
import ProfileSidebar from './components/ProfileSidebar';
import { actions } from './reducer';

export default connect(
  state => ({
    selectedProfileId: state.profileSidebar.selectedProfileId,
    profiles: state.profileSidebar.profiles,
    lockedProfiles: state.profileSidebar.lockedProfiles,
    translations: state.i18n.translations['profile-sidebar'],
  }),
  dispatch => ({
    onProfileClick: id => dispatch(actions.selectProfile({ id })),
  }),
)(ProfileSidebar);

export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
