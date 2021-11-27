module.exports = {
  ...jest.requireActual('..'),
  __esModule: true,
  // TODO: update return value for redux
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
};
