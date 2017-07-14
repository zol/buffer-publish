import React from 'react';
import PropTypes from 'prop-types';
import { PseudoClassComponent } from '@bufferapp/components';
import { calculateStyles } from '@bufferapp/components/lib/utils';
import { curiousBlue, curiousBlueLight } from '@bufferapp/components/style/color';
import { borderRadius } from '@bufferapp/components/style/border';
import Popover from '../Popover';

class ProductButton extends PseudoClassComponent {
  constructor() {
    super();
    this.onMouseLeaveTimeout = null;
    this.state = {
      ...this.state,
      clicked: false
    };
  }
  render() {
    const style = calculateStyles({
      default: {
        display: 'block',
        background: 'none',
        border: 0,
        padding: '6px',
        margin: '16px 16px 16px 16px',
        borderRadius,
        cursor: 'pointer',
        position: 'relative'
      },
      active: {
        background: curiousBlue,
        color: 'white'
      },
      focused: {
        outline: 'none',
        boxShadow: `0 0 2px 3px ${curiousBlueLight}`
      },
      hovered: {
      }
    }, {
      hovered: this.state.hovered,
      focused: this.state.focused,
      active: this.props.active,
    });

    const hoveredOrActiveOrFocused = this.state.hovered || this.props.active || this.state.focused;
    const hoveredOrClicked = this.state.hovered || this.state.clicked;
    const hoverableIcon = React.cloneElement(
      this.props.icon,
      {
        color: hoveredOrActiveOrFocused ? 'white' : 'sidebarIcon',
        size: { width: '20px', height: '20px' }
      }
    );

    return (
      <button
        style={style}
        onMouseEnter={() => { clearTimeout(this.onMouseLeaveTimeout); this.handleMouseEnter(); }}
        onMouseLeave={() => { this.onMouseLeaveTimeout = setTimeout(() => this.handleMouseLeave(), 250); }}
        onClick={() => { this.setState({ clicked: !this.state.clicked }); }}
        onFocus={() => this.handleFocus()}
        onBlur={() => this.handleBlur()}
        aria-haspopup={this.props.children ? true : false}
        aria-expanded={hoveredOrClicked}
      >
        {hoverableIcon}
        {this.props.children &&
          <Popover visible={hoveredOrClicked} offset={{top: '3px', left: '10px'}}>
            {this.props.children}
          </Popover>
        }
      </button>
    );
  }
}


ProductButton.propTypes = {
  active: PropTypes.bool
};

ProductButton.defaultProps = {
};

export default ProductButton;
