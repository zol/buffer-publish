import { connect } from 'react-redux';
import ProfileSidebar from './components/ProfileSidebar';
import { actions } from './reducer';

export default connect(
  state => ({
    selectedProfile: state.profileSidebar.selectedProfile,
    selectedProfileId: state.profileSidebar.selectedProfileId,
    profiles: state.profileSidebar.profiles,
    lockedProfiles: state.profileSidebar.lockedProfiles,
    translations: state.i18n.translations['profile-sidebar'],
  }),
  dispatch => ({
    onProfileClick: profile => dispatch(actions.selectProfile({ profile })),
  }),
)(ProfileSidebar);

export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
