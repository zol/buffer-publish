import React from 'react';
import {
  storiesOf,
  action,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import DashboardPostList from './index';
import {
  posts,
  linkPosts,
  missingTypePosts,
  imagePosts,
  multipleImagePosts,
  sentPosts,
  videoPosts,
  listHeader,
} from './postData';

storiesOf('DashboardPostList')
  .addDecorator(checkA11y)
  .add('default', () => (
    <DashboardPostList
      listHeader={listHeader}
      posts={posts}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onShareNowClick={action('onShareNowClick')}
    />
  ))
  .add('sent', () => (
    <DashboardPostList
      listHeader={listHeader}
      posts={sentPosts}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onShareNowClick={action('onShareNowClick')}
    />
  ))
  .add('missing type', () => (
    <DashboardPostList
      listHeader={listHeader}
      posts={missingTypePosts}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onShareNowClick={action('onShareNowClick')}
    />
  ))
  .add('link posts', () => (
    <DashboardPostList
      listHeader={listHeader}
      posts={linkPosts}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onShareNowClick={action('onShareNowClick')}
    />
  ))
  .add('image posts', () => (
    <DashboardPostList
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
    <DashboardPostList
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
    <DashboardPostList
      listHeader={listHeader}
      posts={videoPosts}
      onCancelConfirmClick={action('onCancelConfirmClick')}
      onDeleteClick={action('onDeleteClick')}
      onDeleteConfirmClick={action('onDeleteConfirmClick')}
      onEditClick={action('onEditClick')}
      onShareNowClick={action('onShareNowClick')}
    />
  ));
