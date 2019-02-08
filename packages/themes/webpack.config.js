const path = require('path');


module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(gif|eot|woff|woff2|ttf|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.gif',
      '.woff',
      '.woff2',
      '.ttf',
      '.eot',
      '.svg',
    ],
    alias: {
      Fonts: path.resolve(__dirname, 'public/fonts/'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'lib/'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  externals: [
    'react',
    'react-dom',
    'styled-components',
  ],
};
