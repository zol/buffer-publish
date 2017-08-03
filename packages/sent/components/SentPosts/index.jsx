import React from 'react';
import PropTypes from 'prop-types';
import {
  PostLists,
  EmptyState,
} from '@bufferapp/publish-shared-components';
import {
  Divider,
  Text,
} from '@bufferapp/components';
import {
  geyser,
  fillColor,
  curiousBlue,
} from '@bufferapp/components/style/color';

const headerStyle = {
  marginBottom: '1.5rem',
  width: '100%',
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

const SentPosts = ({
  header,
  total,
  loading,
  loadingMore,
  postLists,
}) => {
  if (loading) {
    return (<div>Loading...</div>);
  }
  if (total < 1) {
    return (
      <EmptyState
        title="You haven’t published any posts with this account in the past 30 days!"
        subtitle="Once a post has gone live via Buffer, you can track it’s performance here to learn what works best with your audience!"
        heroImg="https://s3.amazonaws.com/buffer-publish/images/empty-sent2x.png"
      />
    );
  }
  return (
    <div>
      <div style={headerStyle}>
        <Text color={'black'}>{header}</Text>
        <Divider />
      </div>
      <PostLists
        postLists={postLists}
      />
      {
        loadingMore ?
          <div style={loadMoreStyle}>{'Loading...'}</div>
          : ''
      }
    </div>
  );
};

SentPosts.propTypes = {
  total: PropTypes.number.isRequired,
  header: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  loadingMore: PropTypes.bool.isRequired,
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

SentPosts.defaultProps = {
  header: null,
  loading: false,
  loadingMore: false,
  postLists: [],
};

export default SentPosts;
