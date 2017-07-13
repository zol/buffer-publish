import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  BufferIcon,
  PublishIcon,
  ReplyIcon,
  AnalyzeIcon
} from '@bufferapp/components';

import ProductButton from '../ProductButton';

import { calculateStyles } from '@bufferapp/components/lib/utils';
import { sidebarBackgroundBlue } from '@bufferapp/components/style/color';

const style = calculateStyles({
  default: {
    background: sidebarBackgroundBlue,
    height: '100vh',
    maxWidth: '65px',
    textAlign: 'center',
    padding: '1rem 0 0 0'
  }
});

const AppSidebar = ({
  translations,
  activeProduct
}) => (
  <div style={style}>
    <BufferIcon
      color={'white'}
      size={{width: '27px', height: '27px'}}
    />
    <ProductButton
      icon={<PublishIcon />}
      active={activeProduct === 'publish'}
    />
    <ProductButton
      icon={<ReplyIcon />}
      active={activeProduct === 'reply'}
    />
    <ProductButton
      icon={<AnalyzeIcon />}
      active={activeProduct === 'analyze'}
    />
  </div>
);

AppSidebar.propTypes = {
};

AppSidebar.defaultProps = {
};

export default AppSidebar;
