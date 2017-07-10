import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import SentPosts from './index';
import {
  header,
  imagePosts,
  linkPosts,
  multipleImagePosts,
  videoPosts,
  listHeader,
  posts,
} from './postData';

storiesOf('SentPosts')
  .addDecorator(checkA11y)
  .add('default', () => (
    <SentPosts
      header={header}
      listHeader={listHeader}
      posts={posts}
    />
  ))
  .add('image posts', () => (
    <SentPosts
      header={header}
      listHeader={listHeader}
      posts={imagePosts}
    />
  ))
  .add('multiple image posts', () => (
    <SentPosts
      header={header}
      listHeader={listHeader}
      posts={multipleImagePosts}
    />
  ))
  .add('link posts', () => (
    <SentPosts
      header={header}
      listHeader={listHeader}
      posts={linkPosts}
    />
  ))
  .add('video posts', () => (
    <SentPosts
      header={header}
      listHeader={listHeader}
      posts={videoPosts}
    />
  ))
  .add('loading', () => (
    <SentPosts
      header={header}
      listHeader={listHeader}
      loading
      posts={videoPosts}
    />
  ));
