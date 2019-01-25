const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    entry: {
      app: './src/index.js'
    },
    output: {
      filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader'
          },
          exclude: '/node_modules/'
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        },
      ]
    },
    devServer: {
      overlay: true
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
        chunkFilename: '[id].css'
      })
    ],
  }
};