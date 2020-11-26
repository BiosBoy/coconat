const path = require('path')
const browserSync = require('browser-sync')
const historyApiFallback = require('connect-history-api-fallback')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const proxyMiddleware = require('./proxy.ts')
const webpackConfig = require('../webpack.config.js')

const bundler = webpack(webpackConfig)

// ========================================================
// WEBPACK MIDDLEWARE CONFIGURATION
// ========================================================
const devMiddlewareOptions = {
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' }
}

// ========================================================
// Server Configuration
// ========================================================
const webpackMiddleware = [webpackDevMiddleware(bundler, devMiddlewareOptions)]

if (__DEV__) {
  webpackMiddleware.push(webpackHotMiddleware(bundler))
}

browserSync({
  open: false,
  cors: false,
  https: {
    key: path.resolve(__dirname, './ssl/localhost.key'),
    cert: path.resolve(__dirname, './ssl/localhost.crt')
  },
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: true
  },
  server: {
    baseDir: path.resolve(__dirname, '../src'),
    middleware: [historyApiFallback(), ...proxyMiddleware, ...webpackMiddleware]
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
})
