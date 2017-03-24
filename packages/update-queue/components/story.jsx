import React from 'react';
import { storiesOf } from '@kadira/storybook';
import UpdateQueue from './index';
import pendingUpdates from '../examplePendingUpdates';

storiesOf('UpdateQueue')
  .add('UpdateQueue', () => (
    <UpdateQueue updates={pendingUpdates} />
  ));
