const RPCClient = jest.genMockFromModule('micro-rpc-client');
RPCClient.prototype.call = jest.fn((name) => {
  if (name === 'create') {
    return Promise.resolve({
      token: 'someSessionToken',
    });
  }
});
module.exports = RPCClient;
