// Jest tesitng config. Responce for app tests.
module.exports = {
  cacheDirectory: '<rootDir>/.tmp/jest',
  coverageDirectory: './.tmp/coverage',
  moduleNameMapper: {
    '^.+\\.(scss)$': 'identity-obj-proxy'
  },
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  globals: {
    NODE_ENV: 'test'
  },
  verbose: true,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/mocks/.*'],
  transformIgnorePatterns: ['.*(node_modules)(?!.*torn.*).*$'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  setupFiles: ['<rootDir>/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
