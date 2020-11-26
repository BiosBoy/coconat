const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const globals = require('../globals')

module.exports = {
  stories: ['../**/*.story.*'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-viewport'
  ],
  webpackFinal: async (config) => {
    // TODO: investigate how we can implement pure webpack.config.js in Storybook!!!
    const customConfig = {
      ...config,
      plugins: [
        ...config.plugins,
        new webpack.DefinePlugin(globals),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css'
        }),
        new HardSourceWebpackPlugin()
      ],
      module: {
        ...config.module,
        rules: [
          {
            test: /\.(js|jsx|ts|tsx)?$/,
            loader: 'ts-loader',
            exclude: [/node_modules/]
          },
          // JSON
          {
            type: 'javascript/auto',
            test: /\.json$/,
            loader: 'json-loader'
          },
          // SCSS
          {
            test: /(\.cssmodule|\.cssmodule\.scss)$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              {
                loader: 'css-modules-typescript-loader'
              },
              {
                loader: 'css-loader',
                modules: {
                  localIdentName: '[local]___[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
          },
          // FONTS
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
          // IMAGES
          {
            test: /\.svg(\?.*)?$/,
            loader: 'url-loader?limit=8192'
          },
          {
            test: /\.(png|jpg|webp)$/,
            loader: 'url-loader?limit=8192'
          }
        ]
      },
      externals: {
        ...config.externals,
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      resolve: {
        ...config.resolve,
        modules: [...config.resolve.modules, 'node_modules'],
        extensions: [...config.resolve.extensions, '.ts', '.tsx', '.js', '.jsx', '.json']
      }
    }

    return customConfig
  },
  typescript: {
    reactDocgen: 'none' // TODO: remove this once the error on 70% will be fixed (about undefined .properties)
  }
}
