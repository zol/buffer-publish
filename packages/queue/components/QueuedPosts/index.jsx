import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Input,
  LoadingAnimation,
} from '@bufferapp/components';
import {
  geyser,
  fillColor,
  curiousBlue,
} from '@bufferapp/components/style/color';
import {
  PostLists,
  EmptyState,
} from '@bufferapp/publish-shared-components';
import ComposerPopover from '../ComposerPopover';

const composerStyle = {
  marginBottom: '1.5rem',
};

const loadingContainerStyle = {
  width: '100%',
  height: '100%',
  textAlign: 'center',
  paddingTop: '5rem',
};

const QueuedPosts = ({
  total,
  loading,
  postLists,
  onComposerPlaceholderClick,
  onComposerCreateSuccess,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onShareNowClick,
  onImageClick,
  onImageClickNext,
  onImageClickPrev,
  onImageClose,
  showComposer,
  editMode,
}) => {
  if (loading) {
    return (
      <div style={loadingContainerStyle}>
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <div>
      <div style={composerStyle}>
        {showComposer && !editMode &&
          <ComposerPopover
            onSave={onComposerCreateSuccess}
            transparentOverlay
            onOverlayClick={onComposerCreateSuccess}
          />
        }
        <Input
          placeholder={'What would you like to share?'}
          onFocus={onComposerPlaceholderClick}
        />
      </div>
      {total < 1 &&
        <EmptyState
          title="It looks like you haven't got any posts in your queue!"
          subtitle="Click the box above to add a post to your queue :)"
          heroImg="https://s3.amazonaws.com/buffer-publish/images/fresh-queue%402x.png"
          heroImgSize={{ width: '229px', height: '196px' }}
        />
      }
      {showComposer && editMode &&
        <ComposerPopover onSave={onComposerCreateSuccess} />
      }
      <PostLists
        postLists={postLists}
        onCancelConfirmClick={onCancelConfirmClick}
        onDeleteClick={onDeleteClick}
        onDeleteConfirmClick={onDeleteConfirmClick}
        onEditClick={onEditClick}
        onShareNowClick={onShareNowClick}
        onImageClick={onImageClick}
        onImageClickNext={onImageClickNext}
        onImageClickPrev={onImageClickPrev}
        onImageClose={onImageClose}
      />
    </div>
  );
};

QueuedPosts.propTypes = {
  loading: PropTypes.bool,
  moreToLoad: PropTypes.bool, // eslint-disable-line
  page: PropTypes.number, // eslint-disable-line
  postLists: PropTypes.arrayOf(
    PropTypes.shape({
      listHeader: PropTypes.string,
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  total: PropTypes.number,
  onComposerPlaceholderClick: PropTypes.func.isRequired,
  onComposerCreateSuccess: PropTypes.func.isRequired,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onShareNowClick: PropTypes.func.isRequired,
  onImageClick: PropTypes.func,
  onImageClickNext: PropTypes.func,
  onImageClickPrev: PropTypes.func,
  onImageClose: PropTypes.func,
  showComposer: PropTypes.bool,
  editMode: PropTypes.bool,
};

QueuedPosts.defaultProps = {
  loading: true,
  moreToLoad: false,
  page: 1,
  postLists: [],
  showComposer: false,
  total: 0,
  enabledApplicationModes: [],
  editMode: false,
};

export default QueuedPosts;
