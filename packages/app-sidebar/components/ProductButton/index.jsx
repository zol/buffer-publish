import React from 'react';
import PropTypes from 'prop-types';
import { PseudoClassComponent } from '@bufferapp/components';
import { calculateStyles } from '@bufferapp/components/lib/utils';
import { curiousBlue } from '@bufferapp/components/style/color';
import { borderRadius } from '@bufferapp/components/style/border';

class ProductButton extends PseudoClassComponent {
  render() {
    const style = calculateStyles({
      default: {
        display: 'block',
        background: 'none',
        border: 0,
        padding: '6px',
        margin: '16px 16px 32px 16px',
        borderRadius,
        cursor: 'pointer'
      },
      active: {
        background: curiousBlue,
        color: 'white'
      },
      hovered: {
      }
    }, {
      hovered: this.state.hovered,
      active: this.props.active
    });

    const hoverableIcon = React.cloneElement(
      this.props.icon,
      {
        color: this.state.hovered || this.props.active ? 'white' : '#7088A5',
        size: { width: '20px', height: '20px' }
      }
    );

    return (
      <button
        style={style}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onFocus={() => this.handleFocus()}
        onBlur={() => this.handleBlur()}
      >
        {hoverableIcon}
      </button>
    );
  }
}


ProductButton.propTypes = {
};

ProductButton.defaultProps = {
};

export default ProductButton;
