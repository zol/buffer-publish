import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
} from '@bufferapp/components';

const EmptyState = ({ title, subtitle, heroImg }) => {
  const containerStyle = {
    textAlign: 'center',
    width: '60%',
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '7rem',
  };

  const imageStyle = {
    marginBottom: '1.5rem',
  };

  const headerStyle = {
    marginBottom: '1.5rem',
    width: '100%',
  };
  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        {heroImg &&
          <img style={imageStyle} alt="" src={heroImg} />}
        {title &&
          <div style={headerStyle}>
            <Text size={'large'} weight={'bold'}>
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
};

EmptyState.defaultProps = {
  title: undefined,
  subtitle: undefined,
  heroImg: undefined,
};

export default EmptyState;
