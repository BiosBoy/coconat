
// import global vars for a whole app
require('./globals');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const debug = require('debug')('app:webpack:config');

// ------------------------------------
// RULES INJECTION!
// ------------------------------------
const rules = [
  // JAVASCRIPT/JSON
  {
    test: /\.(js|jsx|ts|tsx)?$/,
    use: ['babel-loader']
  },
  {
    type: 'javascript/auto',
    test: /\.json$/,
    loader: 'json-loader'
  },
  // STYLES
  {
    test: /.scss$/,
    use: [
      __PROD__ ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
      { loader: 'postcss-loader' },
      'sass-loader'
    ]
  },
  // FILE/IMAGES
  {
    test: /\.woff(\?.*)?$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.woff2(\?.*)?$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
  },
  {
    test: /\.otf(\?.*)?$/,
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
  },
  {
    test: /\.ttf(\?.*)?$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.eot(\?.*)?$/,
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]'
  },
  {
    test: /\.svg(\?.*)?$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.(png|jpg)$/,
    loader: 'url-loader?limit=8192'
  }
];

// ------------------------------------
// BUNDLES OPTIMIZATION
// ------------------------------------
const optimization = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 2
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            unused: true,
            dead_code: true,
            warnings: false
          }
        },
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  performance: {
    hints: false
  }
};

// ------------------------------------
// STAGE PLUGINS INJECTION! [DEVELOPMENT, PRODUCTION, TESTING]
// ------------------------------------
const stagePlugins = {
  test: [
    new BundleAnalyzerPlugin()
  ],
  development: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html',
      inject: 'body',
      minify: false,
      chunksSortMode: 'auto'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  production: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[name].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      },
      chunksSortMode: 'auto'
    }),
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    })
  ]
};

// ------------------------------------
// STAGE CONFIGURATION INJECTION! [DEVELOPMENT, PRODUCTION]
// ------------------------------------
const stageConfig = {
  development: {
    devtool: '',
    stats: {
      chunks: false,
      children: false,
      chunkModules: false,
      colors: true
    }
  },
  production: {
    devtool: 'source-map',
    stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    }
  }
};

const createConfig = () => {
  debug('Creating configuration.');
  debug(`Enabling devtools for "${__NODE_ENV__} Mode!"`);

  const webpackConfig = {
    mode: __DEV__ ? 'development' : 'production',
    name: 'client',
    target: 'web',
    devtool: stageConfig[__NODE_ENV__].devtool,
    stats: stageConfig[__NODE_ENV__].stats,
    module: {
      rules: [
        ...rules
      ]
    },
    ...optimization,
    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
  };

  // ------------------------------------
  // Entry Points
  // ------------------------------------
  webpackConfig.entry = {
    app: [path.resolve(__dirname, 'src/index.js')].concat('webpack-hot-middleware/client?path=/__webpack_hmr')
  };

  // ------------------------------------
  // Bundle externals
  // ------------------------------------
  webpackConfig.externals = {
    react: 'React',
    'react-dom': 'ReactDOM'
  };

  // ------------------------------------
  // Bundle Output
  // ------------------------------------
  webpackConfig.output = {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  };

  // ------------------------------------
  // Plugins
  // ------------------------------------
  debug(`Enable plugins for "${__NODE_ENV__} Mode!"`);
  webpackConfig.plugins = [
    new webpack.DefinePlugin({
      __DEV__,
      __PROD__,
      __TEST__
    }),
    ...stagePlugins[__NODE_ENV__]
  ];

  // ------------------------------------
  // Finishing the Webpack configuration!
  // ------------------------------------
  debug(`Webpack Bundles is Ready for "${__NODE_ENV__} Mode!"`);
  return webpackConfig;
};

module.exports = createConfig();
