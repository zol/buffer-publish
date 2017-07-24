import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from '@bufferapp/components';
import {
  curiousBlue,
} from '@bufferapp/components/style/color';
import {
  calculateStyles,
} from '@bufferapp/components/lib/utils';

import HoverableText from '../HoverableText';

const Tab = ({
  children,
  selected,
  tabId,
  onClick,
}) =>
  <div
    style={calculateStyles({
      default: {
        padding: '0px 4px 16px',
        margin: '0 8px 0 8px',
        display: 'inline-block',
        minWidth: '60px',
        textAlign: 'center',
      },
      selected: {
        borderBottom: `2px solid ${curiousBlue}`,
      },
    }, {
      selected,
    })}
  >
    <Link
      href={'#'}
      onClick={(e) => {
        e.preventDefault();
        onClick(tabId);
      }}
      unstyled
    >
      <HoverableText
        hoverColor={'black'}
      >
        {children}
      </HoverableText>
    </Link>
  </div>;

Tab.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  tabId: PropTypes.string,
};

Tab.defaultProps = {
  selected: false,
};

export default Tab;
