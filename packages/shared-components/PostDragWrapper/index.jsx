import React, { Component } from 'react';
import PropTypes from 'prop-types';

import flow from 'lodash.flow';
import { DragSource, DropTarget } from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
    };
  },
};

const postTarget = {
  hover(props, monitor, component) {
    const dragId = monitor.getItem().id;
    const hoverId = props.id;

    console.log(`Dragging ${dragId} over ${hoverId}.`, component);
  },
};

class PostDragWrapper extends Component {
  render() {
    const {
      id,
      children,
      isDragging,
      connectDragSource,
      connectDropTarget,
    } = this.props;

    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      connectDropTarget(
        <div style={{ opacity }} data-drag-wrapper={id}>
          {children}
        </div>,
      ),
    );
  }
}

PostDragWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

PostDragWrapper.defaultProps = {
};

export default flow(
  DragSource('post', cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })),
  DropTarget('post', postTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  })),
)(PostDragWrapper);
