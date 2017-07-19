import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
} from '@bufferapp/components';
import {
  PostList,
} from '@bufferapp/publish-shared-components';

const composerStyle = {
  marginBottom: '1.5rem',
};

const QueuedPosts = ({
  listHeader,
  loading,
  posts,
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
      <PostList
        listHeader={listHeader}
        posts={posts}
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
  listHeader: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onShareNowClick: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    }),
  ).isRequired,
};

QueuedPosts.defaultProps = {
  listHeader: null,
  loading: false,
};

export default QueuedPosts;
