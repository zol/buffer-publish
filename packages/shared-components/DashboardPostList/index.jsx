import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Text,
} from '@bufferapp/components';
import DashboardTextPost from '../DashboardTextPost';
import DashboardImagePost from '../DashboardImagePost';
import DashboardMultipleImagesPost from '../DashboardMultipleImagesPost';
import DashboardLinkPost from '../DashboardLinkPost';
import DashboardVideoPost from '../DashboardVideoPost';

const postStyle = {
  marginBottom: '2rem',
};

const listHeaderStyle = {
  marginBottom: '1rem',
  marginTop: '1rem',
  marginLeft: '0.5rem',
};

/* eslint-disable react/prop-types */

const renderPost = ({
  post,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onShareNowClick,
}) => {
  const postWithEventHandlers = {
    ...post,
    onCancelConfirmClick: () => onCancelConfirmClick({ post }),
    onDeleteClick: () => onDeleteClick({ post }),
    onDeleteConfirmClick: () => onDeleteConfirmClick({ post }),
    onEditClick: () => onEditClick({ post }),
    onShareNowClick: () => onShareNowClick({ post }),
  };
  switch (post.type) {
    case 'text':
      return (<DashboardTextPost {...postWithEventHandlers} />);
    case 'image':
      return (<DashboardImagePost {...postWithEventHandlers} />);
    case 'multipleImage':
      return (<DashboardMultipleImagesPost {...postWithEventHandlers} />);
    case 'link':
      return (<DashboardLinkPost {...postWithEventHandlers} />);
    case 'video':
      return (<DashboardVideoPost {...postWithEventHandlers} />);
    default:
      return (<DashboardTextPost {...postWithEventHandlers} />);
  }
};

/* eslint-enable react/prop-types */

const DashboardPostList = ({
  listHeader,
  posts,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onShareNowClick,
}) =>
  <div>
    <div style={listHeaderStyle}>
      <Text
        color={'black'}
      >
        {listHeader}
      </Text>
    </div>
    <List
      items={posts.map(post =>
        <div style={postStyle}>
          {
            renderPost({
              post,
              onCancelConfirmClick,
              onDeleteClick,
              onDeleteConfirmClick,
              onEditClick,
              onShareNowClick,
            })
          }
        </div>,
      )}
    />
  </div>;

DashboardPostList.propTypes = {
  listHeader: PropTypes.string,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    }),
  ),
  onCancelConfirmClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  onDeleteConfirmClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onShareNowClick: PropTypes.func,
};

DashboardPostList.defaultProps = {
  posts: [],
};

export default DashboardPostList;
