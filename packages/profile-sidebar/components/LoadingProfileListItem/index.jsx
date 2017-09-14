import React from 'react';
import PropTypes from 'prop-types';

const shimmerStyle = {
  animationDuration: '1s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationName: 'placeHolderShimmer',
  animationTimingFunction: 'linear',
  background: 'linear-gradient(to right, #ddd 8%, #ccc 18%, #ddd 33%)',
  backgroundSize: '800px 104px',
};

const profileAvatarStyle = {
  ...shimmerStyle,
  marginRight: '1rem',
  minWidth: '2rem',
  height: '2rem',
  borderRadius: '100%',
};

const profileHandleStyle = {
  ...shimmerStyle,
  display: 'inline-block',
  width: '8rem',
  height: '.6rem',
  borderRadius: '5px',
};

const profileCountStyle = {
  ...shimmerStyle,
  display: 'inline-block',
  width: '.6rem',
  height: '.6rem',
  borderRadius: '100%',
  marginLeft: '1rem',
};

const LoadingProfileListItem = ({ offset }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0.5rem',
      opacity: 0.6,
    }}
  >
    <div style={{ ...profileAvatarStyle, animationDelay: offset }} />
    <div style={{ ...profileHandleStyle, animationDelay: offset }} />
    <div style={{ ...profileCountStyle, animationDelay: offset }} />
  </div>
);

LoadingProfileListItem.propTypes = {
  offset: PropTypes.string,
};

LoadingProfileListItem.defaultProps = {
  offset: '0ms',
};

export default LoadingProfileListItem;
