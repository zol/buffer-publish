import React from 'react';
import PropTypes from 'prop-types';
import { PostList } from '@bufferapp/publish-shared-components';
import { Divider } from '@bufferapp/components';

const headerStyle = {
  marginBottom: '1.5rem',
  width: '100%',
};

const SentPosts = ({
  header,
  listHeader,
  loading,
  posts,
}) => {
  if (loading) {
    return (<div>Loading...</div>);
  }
  return (
    <div>
      <div style={headerStyle}>
        <Divider color={'black'}>{header}</Divider>
      </div>
      <PostList
        listHeader={listHeader}
        posts={posts}
      />
    </div>
  );
};

SentPosts.propTypes = {
  header: PropTypes.string,
  listHeader: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    }),
  ).isRequired,
};

SentPosts.defaultProps = {
  header: null,
  listHeader: null,
  loading: false,
};

export default SentPosts;
