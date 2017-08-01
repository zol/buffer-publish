import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Select from './index';

const options = [
  { name: 'London', value: 'London' },
  { name: 'New York', value: 'New York' },
  { name: 'San Francisco', value: 'San Francisco' },
  { name: 'Tokyo', value: 'Tokyo' },
  { name: 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch', value: 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch' }, // http://www.fun-with-words.com/longest_place_names.html
];

storiesOf('Select')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Select options={options} />
  ));
