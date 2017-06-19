module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/@bufferapp\/components|\/@bufferapp\/web-components)/,
        loader: 'babel-loader',
        presets: ['es2015', 'stage-0', 'react'],
        plugins: [
          'transform-object-assign',
          'add-module-exports',
        ],
      },
    ],
  },
};
