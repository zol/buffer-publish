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
  loading,
  loadingMore,
  hasSentPosts,
  total,
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
      {hasSentPosts && (total < 1) &&
        <EmptyState
          title={'Wahoo! All your posts have been published.'}
          subtitle={'Great work! Just click the box above to add more posts to your queue and let’s keep the momentum going!'}
          heroImg={'https://s3.amazonaws.com/buffer-publish/images/empty-queue.png'}
        />
      }
      {!hasSentPosts && (total < 1) &&
        <EmptyState
          title={'You’re in! Click in the box above to add your first post.'}
          subtitle={'If you don’t have a post in mind right away, you can use the Buffer Button to add content directly from your favorite sites!'}
          heroImg={'https://s3.amazonaws.com/buffer-publish/images/fresh-queue.png'}
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
  hasSentPosts: PropTypes.bool.isRequired,
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
