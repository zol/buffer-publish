import React from 'react';
import {
  action,
  linkTo,
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import DashboardPostFooter from './index';

const postDetails = {
  postAction: 'This post will be sent at 9:21 (GMT)',
};

const postDetailsError = {
  postAction: 'Woops! Something went wrong. Try again?',
  error: 'Woops! Something went wrong. Try again?',
};

storiesOf('DashboardPostFooter')
  .addDecorator(checkA11y)
  .add('queued post', () => (
    <DashboardPostFooter
      onCancelConfirmClick={linkTo('PostFooter', 'queued post')}
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onShareNowClick={linkTo('PostFooter', 'isWorking')}
      postDetails={postDetails}
      sent={false}
    />
  ))
  .add('sent post', () => (
    <DashboardPostFooter
      postDetails={postDetails}
      sent
    />
  ))
  .add('post with error', () => (
    <DashboardPostFooter
      onCancelConfirmClick={linkTo('PostFooter', 'queued post')}
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onShareNowClick={linkTo('PostFooter', 'isWorking')}
      postDetails={postDetailsError}
      sent={false}
    />
  ))
  .add('isConfirmingDelete', () => (
    <DashboardPostFooter
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'queued post')}
      onEditClick={action('edit-click')}
      postDetails={postDetails}
      isConfirmingDelete
      sent={false}
    />
  ))
  .add('isDeleting', () => (
    <DashboardPostFooter
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'queued post')}
      onEditClick={action('edit-click')}
      postDetails={postDetails}
      isDeleting
      sent={false}
    />
  ))
  .add('isWorking', () => (
    <DashboardPostFooter
      onDeleteClick={linkTo('PostFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostFooter', 'queued post')}
      onEditClick={action('edit-click')}
      postDetails={postDetails}
      isWorking
      sent={false}
    />
  ));
