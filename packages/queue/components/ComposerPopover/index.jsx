import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from '@bufferapp/components';
import ComposerWrapper from '../ComposerWrapper';

const ComposerPopover = ({
  onSave,
  transparentOverlay,
}) => (
  <Popover
    left={'25rem'}
    top={'10rem'}
    transparentOverlay={transparentOverlay}
    onOverlayClick={onSave}
  >
    <ComposerWrapper
      onSave={onSave}
    />
  </Popover>
);

ComposerPopover.propTypes = {
  onSave: PropTypes.func.isRequired,
  transparentOverlay: PropTypes.bool,
};

ComposerPopover.defaultProps = {
  transparentOverlay: false,
};

export default ComposerPopover;
