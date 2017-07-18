import React from 'react';
import PropTypes from 'prop-types';

import {
  PublishIcon,
  ReplyIcon,
  AnalyzeIcon,
  QuestionIcon,
  AvatarIcon,
  Divider
} from '@bufferapp/components';

import PopoverButton from '../PopoverButton';
import BufferLogo from '../BufferLogo';
import PopoverMenu from '../PopoverMenu';
import PopoverMenuItem from '../PopoverMenuItem';

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
  <nav style={style} aria-label='sidebar' role='menubar'>
    <BufferLogo />

    <PopoverButton icon={<PublishIcon />} active={activeProduct === 'publish'} label='Publish' />
    <PopoverButton icon={<ReplyIcon />} active={activeProduct === 'reply'} label='Reply' />
    <PopoverButton icon={<AnalyzeIcon />} active={activeProduct === 'analyze'} label='Analyze (Coming Soon)' />

    {/* marginTop: auto ensures this section sticks to the bottom (flexbox) */}
    <div style={{marginTop: 'auto'}}>
      <PopoverButton icon={<QuestionIcon />} label='Help and Support'>
        <PopoverMenu title="Help & Support">
          <PopoverMenuItem href="https://faq.buffer.com">FAQ</PopoverMenuItem>
          <PopoverMenuItem href="http://status.buffer.com/">Status</PopoverMenuItem>
          <PopoverMenuItem href="https://buffer.com/pricing">Pricing &amp; Plans</PopoverMenuItem>
          <PopoverMenuItem href="https://buffer.com/wishlist">Wishlist</PopoverMenuItem>
        </PopoverMenu>
      </PopoverButton>
      <PopoverButton icon={<AvatarIcon />} label='My Account' large>
        <PopoverMenu>
          <PopoverMenuItem href="https://buffer.com/pricing" subtitle="Email & passwords, upgrades&hellip;">My Account</PopoverMenuItem>
          <PopoverMenuItem href="https://buffer.com/wishlist" subtitle="Notifications, time & date, apps&hellip;">Preferences</PopoverMenuItem>
          <Divider color='sidebarBackgroundBlue' />
          <PopoverMenuItem href="/logout">Sign out</PopoverMenuItem>
        </PopoverMenu>
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
