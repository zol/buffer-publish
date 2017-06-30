import React from 'react';
import PropTypes from 'prop-types';
import {
  IdTag,
  Image,
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

const imageWrapperStyle = {
  position: 'relative',
};

const imageTagStyle = {
  position: 'absolute',
  bottom: '0.7rem',
  left: '0.7rem',
};


const renderTag = (tag) => {
  if (!tag) return;
  return (
    <span style={imageTagStyle}>
      <IdTag>{tag}</IdTag>
    </span>
  );
};

const DashboardImagePost = ({
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
  sent,
  text,
  tag,
  retweetProfile,
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
      <div style={imageWrapperStyle}>
        <Image
          src={imageSrc}
          width={'15rem'}
          maxHeight={'20rem'}
          minHeight={'10rem'}
          border={'rounded'}
          objectFit={'cover'}
        />
        { renderTag(tag) }
      </div>

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
      sent={sent}
      text={text}
      retweetProfile={retweetProfile}
    >
      {children}
    </DashboardPost>
  );
};

DashboardImagePost.propTypes = {
  ...DashboardPost.commonPropTypes,
  imageSrc: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(React.PropTypes.number),
    }),
  ).isRequired,
  text: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

DashboardImagePost.defaultProps = DashboardImagePost.defaultProps;

export default DashboardImagePost;
