import React from 'react';
import { storiesOf } from '@kadira/storybook';
import UpdateQueue from './index';

const updates = {
  total: 8,
  updates: [{
    id: '4ec93ae4512f7e6307000003',
    created_at: 1320703583,
    day: 'Monday 7th November',
    due_at: 1320543481,
    due_time: '07:02 pm',
    profile_id: '4eb854340acb04e870000011',
    profile_service: 'twitter',
    status: 'buffer',
    text: 'This is me in an alternate life where i can breakdance again j.mp/w...',
    text_formatted: 'This is me in an alternate life where i can breakda...',
    user_id: '4eb9276e0acb04bb81000068',
    via: 'firefox',
  }, {
    id: '4ec93ae4512f7e6307000002',
    created_at: 1320703582,
    day: 'Monday 7th November',
    due_at: 1320543480,
    due_time: '07:01 pm',
    profile_id: '4eb854340acb04e870000010',
    profile_service: 'twitter',
    status: 'buffer',
    text: 'This is me in an alternate life where i can breakdance j.mp/w...',
    text_formatted: 'This is me in an alternate life where i can breakda...',
    user_id: '4eb9276e0acb04bb81000067',
    via: 'firefox',
  }],
};

storiesOf('UpdateQueue')
  .add('UpdateQueue', () => (
    <UpdateQueue updates={updates} />
  ));
