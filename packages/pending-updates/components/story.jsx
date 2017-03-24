import React from 'react';
import { storiesOf } from '@kadira/storybook';
import PendingUpdates from './index';
import pendingUpdates from '../examplePendingUpdates';

storiesOf('PendingUpdates')
  .add('PendingUpdates', () => (
    <PendingUpdates updates={pendingUpdates} />
  ));
