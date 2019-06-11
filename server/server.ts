// import global vars for a whole app
const globals = require('../globals');

const path = require('path');
const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.js');
const bundler = webpack(webpackConfig);

// ========================================================
// WEBPACK MIDDLEWARE CONFIGURATION
// ========================================================
const devMiddlewareOptions = {
  publicPath: webpackConfig.output.publicPath,
  hot: globals.__DEV__ ? true : false,
  headers: { 'Access-Control-Allow-Origin': '*' }
};

// ========================================================
// Server Configuration
// ========================================================
const webpackMiddleware = [webpackDevMiddleware(bundler, devMiddlewareOptions)];

if (globals.__DEV__) {
  webpackMiddleware.push(webpackHotMiddleware(bundler));
}

browserSync({
  open: false,
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: true
  },
  server: {
    baseDir: path.resolve(__dirname, '../src'),
    middleware: [historyApiFallback(), ...webpackMiddleware]
  },
  files: [
    'src/../*.tsx',
    'src/../*.ts',
    'src/../*.jsx',
    'src/../*.js',
    'src/../*.json',
    'src/../*.scss',
    'src/../*.html'
  ]
});
