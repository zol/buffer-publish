import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import InputAutocomplete from './index';
import { getStates, sortStates } from './utils';

storiesOf('InputAutocomplete')
  .addDecorator(checkA11y)
  .add('default', () => (
    <InputAutocomplete
      items={getStates()} onChange={action('change')} onSelect={action('select-item')}
      value={''} sortItems={sortStates}
    />
  ));
