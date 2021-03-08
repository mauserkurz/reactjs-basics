const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/app/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: "/app/"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};
