import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import ProfileSidebar from './index';
import profiles from '../../mockData/profiles';
import lockedProfiles from '../../mockData/lockedProfiles';

const lotsOfProfiles = () =>
  [...Array(10)].reduce(p => [...p, ...lockedProfiles], []);

const translations = {
  connectButton: 'Connect a Social Account',
  lockedList: 'Locked Social Accounts',
};

storiesOf('ProfileSidebar')
  .addDecorator(checkA11y)
  .add('should display a list of profiles', () => (
    <ProfileSidebar
      selectedProfileId={'1234'}
      profiles={profiles}
      lockedProfiles={lockedProfiles}
      translations={translations}
      onProfileClick={action('profile click')}
    />
  ))
  .add('should display a long list of profiles', () => (
    <ProfileSidebar
      profiles={profiles}
      lockedProfiles={lotsOfProfiles()}
      translations={translations}
      onProfileClick={action('profile click')}
      selectedProfile={profiles[0]}
    />
  ));
