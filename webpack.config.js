module.exports = {
  entry: './packages/web/index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      include: __dirname,
      query: {
        presets: ['es2015', 'react', 'react-hmre'],
      },
    }],
  },
};
