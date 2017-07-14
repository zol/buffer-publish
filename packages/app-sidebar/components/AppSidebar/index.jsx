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
  <div style={style}>
    <div style={{marginBottom: '1rem'}}>
      <BufferIcon
        color={'white'}
        size={{width: '27px', height: '27px'}}
      />
    </div>
    <ProductButton
      icon={<PublishIcon />}
      active={activeProduct === 'publish'}
    >
      Publish
    </ProductButton>
    <ProductButton
      icon={<ReplyIcon />}
      active={activeProduct === 'reply'}
    >
      Reply
    </ProductButton>
    <ProductButton
      icon={<AnalyzeIcon />}
      active={activeProduct === 'analyze'}
    >
      Analyze (Coming Soon)
    </ProductButton>
    <div style={{marginTop: 'auto'}}>
      <ProductButton
        icon={<AnalyzeIcon />}
        active={activeProduct === 'analyze'}
      ></ProductButton>
    </div>
  </div>
);

AppSidebar.propTypes = {
  // translations: PropTypes.shape({}),
  activeProduct: PropTypes.string.isRequired
};

AppSidebar.defaultProps = {
  activeProduct: 'publish'
};

export default AppSidebar;
