import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
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
      profiles={profiles}
      lockedProfiles={lockedProfiles}
      translations={translations}
    />
  ))
  .add('should display a long list of profiles', () => (
    <ProfileSidebar
      profiles={profiles}
      lockedProfiles={lotsOfProfiles()}
      translations={translations}
    />
  ));
