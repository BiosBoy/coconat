// import global vars for a whole app
require('../globals');

const debug = require('debug')('app:build:webpack-compiler');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

// -----------------------------
// READING WEBPACK CONFIGURATION
// -----------------------------
function webpackCompiler() {
  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig);

    compiler.run((err, stats) => {
      if (err) {
        debug('Webpack compiler encountered a fatal error.', err);

        return reject(err);
      }

      const jsonStats = stats.toJson();

      debug('Webpack compilation is completed.');

      resolve(jsonStats);
    });
  });
}

// -----------------------------
// STARTING APP COMPILATION PROCESS
// -----------------------------
const compile = () => {
  debug('Starting compiler.');

  return Promise.resolve()
    .then(() => webpackCompiler())
    .then(() => {
      debug('Compilation completed successfully.');
    })
    .catch(err => {
      debug('Compiler encountered an error.', err);

      process.exit(1);
    });
};

compile();
