module.exports = {
  context: __dirname,
  entry: [
    '../web/index.jsx',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/@bufferapp\/components)(?!\/@bufferapp\/web-components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
