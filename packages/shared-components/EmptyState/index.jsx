import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Image,
} from '@bufferapp/components';

const EmptyState = ({ title, subtitle, heroImg, heroImgSize }) => {
  const containerStyle = {
    textAlign: 'center',
    width: '65%',
    alignSelf: 'center',
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    height: '50vh',
  };

  const headerStyle = {
    marginBottom: '1.5rem',
    width: '100%',
  };

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        {heroImg &&
          <Image marginBottom="1.5rem" alt="" src={heroImg} width={heroImgSize.width} height={heroImgSize.height} />}
        {title &&
          <div style={headerStyle}>
            <Text size="large" weight="bold">
              {title}
            </Text>
          </div>}
        {subtitle &&
          <div>
            <Text>
              {subtitle}
            </Text>
          </div>}
      </div>
    </div>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heroImg: PropTypes.string,
  heroImgSize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
};

export default EmptyState;
