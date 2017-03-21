import React from 'react';

const UpdateQueue = ({ updates }) =>
  <div>{JSON.stringify(updates, null, 2)}</div>;

export default UpdateQueue;
