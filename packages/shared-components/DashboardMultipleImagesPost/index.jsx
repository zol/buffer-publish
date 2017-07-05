import React from 'react';
import PropTypes from 'prop-types';
import {
  LinkifiedText,
  MultipleImages,
} from '@bufferapp/components';
// import style from './style.css';
import DashboardPost from '../DashboardPost';

const postContentStyle = {
  display: 'flex',
};

const postContentTextStyle = {
  paddingRight: '1rem',
  flexGrow: 1,
};

const DashboardMultipleImagesPost = ({
  postDetails,
  imageUrls,
  isConfirmingDelete,
  isDeleting,
  isWorking,
  links,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onShareNowClick,
  retweetProfile,
  sent,
  text,
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
      <div>
        <MultipleImages
          border={'rounded'}
          height={'15rem'}
          urls={imageUrls}
          width={'20rem'}
        />
      </div>
    </div>
  );

  return (
    <DashboardPost
      postDetails={postDetails}
      isConfirmingDelete={isConfirmingDelete}
      isDeleting={isDeleting}
      isWorking={isWorking}
      links={links}
      onCancelConfirmClick={onCancelConfirmClick}
      onDeleteClick={onDeleteClick}
      onDeleteConfirmClick={onDeleteConfirmClick}
      onEditClick={onEditClick}
      onShareNowClick={onShareNowClick}
      retweetProfile={retweetProfile}
      sent={sent}
      text={text}
    >
      {children}
    </DashboardPost>
  );
};

DashboardMultipleImagesPost.propTypes = {
  ...DashboardPost.commonPropTypes,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(PropTypes.number),
      rawString: PropTypes.string,
    }),
  ).isRequired,
  text: PropTypes.string.isRequired,
};

DashboardMultipleImagesPost.defaultProps = DashboardPost.defaultProps;

export default DashboardMultipleImagesPost;
