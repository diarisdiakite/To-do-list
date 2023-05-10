const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const mime = require('mime-types');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    // print: './src/print.js',
  },
  /*
  devServer: {
    static: './dist',
  },
  */
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};