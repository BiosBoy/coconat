const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            target: 'ES2019'
          }
        },
        exclude: [/node_modules/]
      }
    ]
  },
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
