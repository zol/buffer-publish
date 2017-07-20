import React from 'react';
import PropTypes from 'prop-types';
import { PseudoClassComponent, ArrowPopover } from '@bufferapp/components';
import { calculateStyles } from '@bufferapp/components/lib/utils';
import { curiousBlue, curiousBlueLight, sidebarBackgroundBlue } from '@bufferapp/components/style/color';
import { borderRadius } from '@bufferapp/components/style/border';

class PopoverButton extends PseudoClassComponent {
  constructor() {
    super();
    this.onMouseLeaveTimeout = null;
    this.state = {
      ...this.state,
      clicked: false,
    };
  }
  render() {
    const style = calculateStyles({
      default: {
        display: 'inline-block',
        background: 'none',
        border: 0,
        padding: '6px',
        margin: '16px 16px 16px 16px',
        borderRadius,
        cursor: 'pointer',
        position: 'relative',
      },
      focused: {
        outline: 'none',
        boxShadow: `0 0 0 2px ${sidebarBackgroundBlue}, 0 0 2px 3px ${curiousBlueLight}`,
      },
      active: {
        background: curiousBlue,
        color: 'white',
      },
      large: {
        margin: 0,
      },
    }, {
      focused: this.state.focused,
      active: this.props.active,
      large: this.props.large,
    });

    const sizeStyles = this.props.large ? {
      width: '27px',
      height: '27px',
    } : {
      width: '20px',
      height: '20px',
    };

    const hoveredOrActiveOrFocused = this.state.hovered || this.props.active || this.state.focused;
    const hoveredOrClicked = this.state.hovered || this.state.clicked;
    const hoverableIcon = React.cloneElement(
      this.props.icon,
      {
        color: hoveredOrActiveOrFocused ? 'white' : 'sidebarIcon',
        size: sizeStyles,
      },
    );
    const a11y = { 'aria-label': this.props.label };
    if (this.props.children) {
      a11y['aria-haspopup'] = 'true';
      a11y['aria-expanded'] = hoveredOrClicked;
    }

    const popoverOffset = this.props.popoverPosition === 'above'
      ? { top: -4, left: 3 }
      : { top: -3, left: 3 };

    return (
      <button
        style={style}
        onMouseEnter={() => { clearTimeout(this.onMouseLeaveTimeout); this.handleMouseEnter(); }}
        onMouseLeave={() => {
          this.onMouseLeaveTimeout =
            setTimeout(() => this.doMouseLeave(), this.props.children ? 250 : 0);
        }}
        onClick={() => { this.setState({ clicked: !this.state.clicked }); }}
        onFocus={() => this.handleFocus()}
        onBlur={() => this.handleBlur()}
        {...a11y}
      >
        <ArrowPopover
          visible={hoveredOrClicked}
          padded={!this.props.children}
          shadow
          position={this.props.popoverPosition}
          offset={popoverOffset}
        >
          {this.props.children ? this.props.children : this.props.label}
        </ArrowPopover>
        <div style={sizeStyles}>
          {hoverableIcon}
        </div>
      </button>
    );
  }
  doMouseLeave() {
    this.handleMouseLeave();
    this.setState({ clicked: false });
  }
}


PopoverButton.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  label: PropTypes.string,
  large: PropTypes.bool,
  popoverPosition: PropTypes.oneOf(['none', 'above', 'below']),
};

PopoverButton.defaultProps = {
  active: false,
  large: false,
  popoverPosition: 'none',
};

export default PopoverButton;
