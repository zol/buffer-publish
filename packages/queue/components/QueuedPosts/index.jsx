import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
} from '@bufferapp/components';
import {
  PostLists,
} from '@bufferapp/publish-shared-components';

const composerStyle = {
  marginBottom: '1.5rem',
};

const QueuedPosts = ({
  loading,
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
      <PostLists
        postLists={postLists}
        onCancelConfirmClick={onCancelConfirmClick}
        onDeleteClick={onDeleteClick}
        onDeleteConfirmClick={onDeleteConfirmClick}
        onEditClick={onEditClick}
        onShareNowClick={onShareNowClick}
      />
    </div>
  );
};

QueuedPosts.propTypes = {
  loading: PropTypes.bool.isRequired,
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
  loading: false,
  postLists: [],
};

export default QueuedPosts;
