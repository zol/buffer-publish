import React, { PropTypes } from 'react';
import {
  Card,
  List,
} from '@bufferapp/components';

const PendingUpdates = ({ updates }) =>
  <List items={updates.map(update => <Card>{JSON.stringify(update)}</Card>)} />;

PendingUpdates.propTypes = {
  updates: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

PendingUpdates.defaultProps = {
  updates: [],
};

export default PendingUpdates;
