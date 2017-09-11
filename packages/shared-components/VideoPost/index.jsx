import React from 'react';
import ImagePost from '../ImagePost';

const VideoPost = ({
  isConfirmingDelete,
  isDeleting,
  isWorking,
  imageSrc,
  links,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  onShareNowClick,
  postDetails,
  text,
  tag,
  retweetProfile,
  sent,
  onImageClick,
  onImageClickNext,
  onImageClickPrev,
  onImageClose,
  isLightboxOpen,
}) =>
  <ImagePost
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
    onShareNowClick={onShareNowClick}
    retweetProfile={retweetProfile}
    sent={sent}
    onImageClick={onImageClick}
    onImageClickNext={onImageClickNext}
    onImageClickPrev={onImageClickPrev}
    onImageClose={onImageClose}
    isLightboxOpen={isLightboxOpen}
  />;

VideoPost.propTypes = ImagePost.propTypes;

VideoPost.defaultProps = {
  ...ImagePost.defaultProps,
  tag: 'VIDEO',
};

export default VideoPost;
