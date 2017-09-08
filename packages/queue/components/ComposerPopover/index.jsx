import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from '@bufferapp/components';
import ComposerWrapper from '../ComposerWrapper';

const ComposerPopover = ({
  onSave,
}) => (
  <Popover
    left={'25rem'}
    top={'10rem'}
  >
    <ComposerWrapper
      onSave={onSave}
    />
  </Popover>
);

ComposerPopover.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default ComposerPopover;
