import React from 'react';
import PropTypes from 'prop-types';
import { PostLists } from '@bufferapp/publish-shared-components';
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

const containerStyle = {
  textAlign: 'center',
};

const SentPosts = ({
  header,
  loading,
  loadingMore,
  postLists,
}) => {
  if (loading) {
    return (<div>Loading...</div>);
  }
  if (postLists.length < 1) {
    return (
      <div style={containerStyle}>
        <img alt="" src="./empty-sent.png" />
        <div style={headerStyle}>
          <Text size={'large'} weight={'bold'}>
            You haven’t published any posts with this account yet!
          </Text>
        </div>
        <div>
          <Text>
            Once a post has gone live via Buffer, you can
            track it’s performance here to learn what works
            best with your audience!
          </Text>
        </div>
      </div>
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
