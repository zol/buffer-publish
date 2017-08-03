import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
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

const composerStyle = {
  marginBottom: '1.5rem',
};

const loadMoreStyle = {
  border: `1px solid ${geyser}`,
  width: '100%',
  padding: '10px',
  position: 'relative',
  textAlign: 'center',
  backgroundColor: fillColor,
  color: curiousBlue,
};

const QueuedPosts = ({
  total,
  loading,
  loadingMore,
  postLists,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onShareNowClick,
}) => {
  if (loading) {
    return (<div>Loading...</div>);
  }
  return (
    <div>
      <div style={composerStyle}>
        <Input
          placeholder={'What would you like to share?'}
        />
      </div>
      {total < 1 &&
        <EmptyState
          title={'It looks like you haven\'t got any posts in your queue!'}
          subtitle={'Click the box above to add a post to your queue :)'}
          heroImg={'https://s3.amazonaws.com/buffer-publish/images/fresh-queue%402x.png'}
        />
      }
      <PostLists
        postLists={postLists}
        onCancelConfirmClick={onCancelConfirmClick}
        onDeleteClick={onDeleteClick}
        onDeleteConfirmClick={onDeleteConfirmClick}
        onEditClick={onEditClick}
        onShareNowClick={onShareNowClick}
      />
      {
        loadingMore ?
          <div style={loadMoreStyle}>{'Loading...'}</div>
          : ''
      }
    </div>
  );
};

QueuedPosts.propTypes = {
  total: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingMore: PropTypes.bool.isRequired,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onShareNowClick: PropTypes.func.isRequired,
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
};

QueuedPosts.defaultProps = {
  postLists: [],
  loadingMore: false,
};

export default QueuedPosts;
