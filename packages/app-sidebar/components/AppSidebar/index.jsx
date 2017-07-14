import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  BufferIcon,
  PublishIcon,
  ReplyIcon,
  AnalyzeIcon,
  QuestionIcon
} from '@bufferapp/components';

import PopoverButton from '../PopoverButton';

import { calculateStyles } from '@bufferapp/components/lib/utils';
import { sidebarBackgroundBlue } from '@bufferapp/components/style/color';

const style = calculateStyles({
  default: {
    background: sidebarBackgroundBlue,
    textAlign: 'center',
    padding: '1rem 0 0 0',
    display: 'flex',
    flex: '1',
    flexDirection:'column',
    justifyContent: 'center',
  }
});

const AppSidebar = ({
  translations,
  activeProduct
}) => (
  <nav style={style} aria-label='sidebar'>
    {/* TODO: Move the following `div` into a SidebarLogo component to be more clean, handle linking, etc. */}
    <div style={{marginBottom: '1rem'}}>
      <BufferIcon
        color={'white'}
        size={{width: '27px', height: '27px'}}
      />
    </div>

    <PopoverButton icon={<PublishIcon />} active={activeProduct === 'publish'} label='Publish' />
    <PopoverButton icon={<ReplyIcon />} active={activeProduct === 'reply'} label='Reply' />
    <PopoverButton icon={<AnalyzeIcon />} active={activeProduct === 'analyze'} label='Analyze (Coming Soon)' />

    {/* marginTop: auto ensures this section sticks to the bottom (flexbox) */}
    <div style={{marginTop: 'auto'}}>
      <PopoverButton icon={<QuestionIcon />} label='Help and Support'>
        Wow, ok!
      </PopoverButton>
    </div>
  </nav>
);

AppSidebar.propTypes = {
  // translations: PropTypes.shape({}),
  activeProduct: PropTypes.string.isRequired
};

AppSidebar.defaultProps = {
  activeProduct: 'publish'
};

export default AppSidebar;
