/**
 * Component that shows the list of available profiles
 */
import React from 'react';
import Profile from '../components/Profile';
import ProfileGroups from '../components/ProfileGroups';
import Button from '../components/Button';
import styles from './css/ProfileSection.css';
import AppActionCreators from '../action-creators/AppActionCreators';

class ProfileSection extends React.Component {
  static propTypes = {
    profiles: React.PropTypes.array.isRequired,
    appState: React.PropTypes.object.isRequired,
    userData: React.PropTypes.object,
    visibleNotifications: React.PropTypes.array.isRequired,
  };

  onScroll = (e) => {
    if (e.target !== this.refs.profilesScrollContainer) return;

    const scrollTop = e.target.scrollTop;
    this.scrollHandlers.forEach((handler) => handler(e, scrollTop));
  };

  onProfilesToggleClick = () => AppActionCreators.toggleAllProfiles();

  addContainerScrollHandler = (handler) => {
    this.scrollHandlers.add(handler);
  };

  removeContainerScrollHandler = (handler) => {
    this.scrollHandlers.delete(handler);
  };

  scrollHandlers = new Set();

  render() {
    const { appState, profiles, userData, visibleNotifications } = this.props;
    const { isBusinessUser, profileGroups } = userData;

    const hasBusinessProfiles = profiles.some((profile) => profile.isBusinessProfile);
    const shouldBeConsideredBusinessUser = isBusinessUser || hasBusinessProfiles;

    const selectedProfilesIds =
      this.props.profiles.filter((profile) => profile.isSelected).map((profile) => profile.id);
    const hasNoProfilesSelected = selectedProfilesIds.length === 0;

    const profilesTogglerClassName = [styles.profilesToggler, 'js-disable-dragging'].join(' ');

    return (
      <div className={styles.profileSection}>
        {shouldBeConsideredBusinessUser &&
          <Button
            className={profilesTogglerClassName} onClick={this.onProfilesToggleClick}
          >
            <span className={styles.profilesTogglerCopy}>
              {hasNoProfilesSelected ? 'Select All' : 'Select None'}
            </span>
          </Button>
        }

        {shouldBeConsideredBusinessUser &&
          <ProfileGroups
            groups={profileGroups}
            selectedProfilesIds={selectedProfilesIds}
          />}

        <div className={styles.profilesContainer}>
          <div
            onScroll={this.onScroll}
            className={styles.profilesScrollContainer}
            ref="profilesScrollContainer"
          >
            {profiles.map((profile) =>
              <Profile
                profile={profile}
                expandedProfileSubprofileDropdownId={appState.expandedProfileSubprofileDropdownId}
                addContainerScrollHandler={this.addContainerScrollHandler}
                removeContainerScrollHandler={this.removeContainerScrollHandler}
                visibleNotifications={visibleNotifications}
                className={styles.profile}
                key={profile.id}
              />)}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileSection;
