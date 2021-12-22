const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: "./src/index.js",
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: "umd",
  },
  optimization: {
    minimize: false,
  },
};
