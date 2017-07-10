import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Divider from './index';

storiesOf('Divider')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Divider />
  ))
  .add('with text', () => (
    <Divider>Text</Divider>
  ))
  .add('with black text', () => (
    <Divider color={'black'}>Text</Divider>
  ));
