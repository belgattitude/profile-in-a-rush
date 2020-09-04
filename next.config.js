const withMDX = require('@next/mdx')();
const withBundleAnalyzer = require('@next/bundle-analyzer');
const config = withMDX({
  poweredByHeader: true,
  reactStrictMode: true,
  experimental: {
    // optimizeFonts: true,
    // optimizeImages: true,
  },
});

if (process.env.ANALYZE === 'true') {
  module.exports = withBundleAnalyzer(config);
} else {
  module.exports = config;
}
