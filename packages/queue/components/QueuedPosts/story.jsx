import React from 'react';
import {
  storiesOf,
  action,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import QueuedPosts from './index';
import {
  posts,
  imagePosts,
  linkPosts,
  listHeader,
  multipleImagePosts,
  videoPosts,
} from './postData';

storiesOf('QueuedPosts')
  .addDecorator(checkA11y)
  .add('default', () => (
    <QueuedPosts
      listHeader={listHeader}
      posts={posts}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onShareNowClick={action('onShareNowClick')}
    />
  ))
  .add('image posts', () => (
    <QueuedPosts
      listHeader={listHeader}
      posts={imagePosts}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onShareNowClick={action('onShareNowClick')}
    />
  ))
  .add('multiple image posts', () => (
    <QueuedPosts
      listHeader={listHeader}
      posts={multipleImagePosts}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onShareNowClick={action('onShareNowClick')}
    />
  ))
  .add('video posts', () => (
    <QueuedPosts
      listHeader={listHeader}
      posts={videoPosts}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onShareNowClick={action('onShareNowClick')}
    />
  ))
  .add('link posts', () => (
    <QueuedPosts
      listHeader={listHeader}
      posts={linkPosts}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onShareNowClick={action('onShareNowClick')}
    />
  ))
  .add('loading', () => (
    <QueuedPosts
      listHeader={listHeader}
      loading
      posts={linkPosts}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onShareNowClick={action('onShareNowClick')}
    />
  ));
