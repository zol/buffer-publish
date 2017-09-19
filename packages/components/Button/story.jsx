import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import withReadme from 'storybook-readme/with-readme';
import Button from './index';
import CloseIcon from '../Icon/Icons/CloseIcon';
import Text from '../Text';
import Readme from './README.md';

storiesOf('Button')
  .addDecorator(checkA11y)
  .addDecorator(withReadme(Readme))
  .add('default', () => (
    <Button onClick={action('on-click')}>Click Me</Button>
  ))
  .add('warning button', () => (
    <Button onClick={action('on-click')} warning>Warning</Button>
  ))
  .add('with icon and text', () => (
    <Button onClick={action('on-click')} noStyle>
      <CloseIcon />
      <Text>Close</Text>
    </Button>
  ))
  .add('with icon only', () => (
    <Button onClick={action('on-click')} noStyle><CloseIcon /></Button>
  ));
