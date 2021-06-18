const withMDX = require('@next/mdx')();
const withBundleAnalyzer = require('@next/bundle-analyzer');

const withTM = require('next-transpile-modules')(['ky'], {
  debug: false,
});

const config = withTM(
  withMDX({
    poweredByHeader: true,
    reactStrictMode: true,
    webpack5: true,
    webpack: (config) => {
      return config;
    },
  })
);

if (process.env.ANALYZE === 'true') {
  module.exports = withBundleAnalyzer(config);
} else {
  module.exports = config;
}
