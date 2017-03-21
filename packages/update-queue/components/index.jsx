import React, { PropTypes } from 'react';
import {
  Card,
  List,
} from '@bufferapp/components';

const UpdateQueue = ({ updates }) =>
  <List items={updates.map(update => <Card>{JSON.stringify(update)}</Card>)} />;

UpdateQueue.propTypes = {
  updates: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

UpdateQueue.defaultProps = {
  updates: [],
};

export default UpdateQueue;
