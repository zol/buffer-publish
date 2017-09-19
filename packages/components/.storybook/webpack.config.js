const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
  });
  config.resolve.extensions.push('.md');
  return config;
};
