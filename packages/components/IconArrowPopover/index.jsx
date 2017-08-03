import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import ArrowPopover from '../ArrowPopover';

const containerStyle = {
  display: 'inline-block',
  width: '16px',
  height: '16px',
  position: 'relative',
};

class IconArrowPopover extends Component {
  static propTypes = {
    ...ArrowPopover.propTypes,
    icon: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
  }

  constructor() {
    super();
    this.id = `tooltip_${uuid()}`;
    this.state = {
      hovered: false,
    };
  }

  render() {
    const { icon, children: tooltip, ...rest } = this.props;
    return (
      <div
        style={containerStyle}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        tabIndex="0"
        aria-describedby={this.id}
        aria-label={this.props.label}
        role="tooltip"
      >
        {icon}
        <ArrowPopover
          visible={this.state.hovered}
          offset={{ left: 3, top: -4 }}
          isTooltip
          id={this.id}
          {...rest}
        >
          {tooltip}
        </ArrowPopover>
      </div>
    );
  }
}

export default IconArrowPopover;
