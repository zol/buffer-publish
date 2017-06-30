import React from 'react';
import DashboardImagePost from '../DashboardImagePost';

const DashboardVideoPost = ({
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
  tag,
  retweetProfile,
  sent,
}) =>
  <DashboardImagePost
    isConfirmingDelete={isConfirmingDelete}
    isDeleting={isDeleting}
    isWorking={isWorking}
    imageSrc={imageSrc}
    links={links}
    postDetails={postDetails}
    tag={tag}
    text={text}
    onCancelConfirmClick={onCancelConfirmClick}
    onDeleteClick={onDeleteClick}
    onDeleteConfirmClick={onDeleteConfirmClick}
    onEditClick={onEditClick}
    retweetProfile={retweetProfile}
    sent={sent}
  />;

DashboardVideoPost.propTypes = DashboardImagePost.propTypes;

DashboardVideoPost.defaultProps = {
  ...DashboardImagePost.defaultProps,
  tag: 'VIDEO',
};

export default DashboardVideoPost;
