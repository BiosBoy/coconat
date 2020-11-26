const webpack = require('webpack')
const path = require('path')

const globals = require('../globals')

module.exports = {
  stories: ['../**/*.story.*'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-viewport'
  ],
  webpackFinal: async (config) => {
    const customConfig = {
      ...config,
      plugins: [
        ...config.plugins,
        new webpack.DefinePlugin(globals),
      ],
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          // SCSS
          {
            test: /.scss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: "[name]__[local]___[hash:base64:5]"
                  }
                }
              },
              'sass-loader'
            ],
            include: path.resolve(__dirname, '../')
          }
        ]
      },
      externals: {
        ...config.externals
      },
      resolve: {
        ...config.resolve,
        modules: [...config.resolve.modules, 'node_modules'],
        extensions: [...config.resolve.extensions, '.ts', '.tsx', '.js', '.jsx', '.json']
      }
    }

    return customConfig
  }
}
