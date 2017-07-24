import React from 'react';
import PropTypes from 'prop-types';
import { PostLists } from '@bufferapp/publish-shared-components';
import {
  Divider,
  Text,
} from '@bufferapp/components';

const headerStyle = {
  marginBottom: '1.5rem',
  width: '100%',
};

const SentPosts = ({
  header,
  loading,
  postLists,
}) => {
  if (loading) {
    return (<div>Loading...</div>);
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
    </div>
  );
};

SentPosts.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool.isRequired,
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
  postLists: [],
};

export default SentPosts;
