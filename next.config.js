const withMDX = require('@next/mdx')();
const withBundleAnalyzer = require('@next/bundle-analyzer');
const config = withMDX({
  poweredByHeader: true,
  reactStrictMode: true,
  experimental: {
    //optimizeFonts: true,
    // optimizeImages: true,
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  },
});

if (process.env.ANALYZE === 'true') {
  module.exports = withBundleAnalyzer(config);
} else {
  module.exports = config;
}
