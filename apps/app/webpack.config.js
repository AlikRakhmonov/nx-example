const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');

module.exports = composePlugins(
  withNx(),
  withReact(),
  // (config) => {
  //   config.resolve.mainFields = [
  //     'browser',
  //     'module',
  //     'main',
  //     ...(config.resolve.mainFields || []),
  //   ];
  //   return config;
  // },
);
