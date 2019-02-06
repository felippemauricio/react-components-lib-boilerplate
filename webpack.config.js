const path = require('path');


module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: {
          loader: "eslint-loader",
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.scss',
      '.js',
      '.json',
      '.png',
      '.gif',
      '.jpg',
      '.svg',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'lib/'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  externals: [
    'polished',
    'react',
    'react-dom',
    'styled-components',
    'styled-components-modifiers',
    'styled-tools',
  ],
};
