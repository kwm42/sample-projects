const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'static',
        to: './'
      }, {
        from: 'projects',
        to: './projects'
      }
    ]),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
    }),
  ],
  devServer: {
    // contentBase: './dist',
    contentBase: './docs',
    hot: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
              },
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}