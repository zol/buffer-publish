import React from 'react';
import PropTypes from 'prop-types';
import {
  LinkifiedText,
} from '@bufferapp/components';
import DashboardPost from '../DashboardPost';

const postContentStyle = {
  display: 'flex',
};

const postContentTextStyle = {
  paddingRight: '1rem',
  flexGrow: 1,
};

const DashboardTextPost = ({
  isConfirmingDelete,
  isDeleting,
  isWorking,
  imageSrc,
  links,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  postDetails,
  text,
  retweetProfile,
  retweetComment,
  retweetCommentLinks,
  sent,
}) => {
  const children = (
    <div style={postContentStyle}>
      <span style={postContentTextStyle}>
        <LinkifiedText
          links={links}
          size={'mini'}
          newTab
          unstyled
        >
          {text}
        </LinkifiedText>
      </span>
    </div>
  );

  return (
    <DashboardPost
      isConfirmingDelete={isConfirmingDelete}
      isDeleting={isDeleting}
      isWorking={isWorking}
      imageSrc={imageSrc}
      links={links}
      onCancelConfirmClick={onCancelConfirmClick}
      onDeleteClick={onDeleteClick}
      onDeleteConfirmClick={onDeleteConfirmClick}
      onEditClick={onEditClick}
      postDetails={postDetails}
      text={text}
      retweetProfile={retweetProfile}
      retweetComment={retweetComment}
      retweetCommentLinks={retweetCommentLinks}
      sent={sent}
    >
      {children}
    </DashboardPost>
  );
};

DashboardTextPost.propTypes = {
  ...DashboardPost.commonPropTypes,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(PropTypes.number),
    }),
  ).isRequired,
  retweetCommentLinks: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(PropTypes.number),
    }),
  ),
  text: PropTypes.string.isRequired,
};

DashboardTextPost.defaultProps = DashboardPost.defaultProps;

export default DashboardTextPost;
