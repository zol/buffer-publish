import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import Popover from './index';

const translations = {};

storiesOf('Popover')
  .addDecorator(checkA11y)
  .add('default', () => (
  	<div style={{margin: '2rem', width: '100px', position: 'relative', overflow: 'visible'}}>
	    <Popover visible={true}>
	    	<div style={{width: 'auto'}}>Hello, world!</div>
	    </Popover>
    </div>
  ));
