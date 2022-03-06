// @ts-check

const withMDX = require('@next/mdx')();
const withBundleAnalyzer = require('@next/bundle-analyzer');

const packageJson = require('./package.json');

const withTM = require('next-transpile-modules')(['ky'], {
  debug: false,
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  httpAgentOptions: {
    // @link https://nextjs.org/blog/next-11-1#builds--data-fetching
    keepAlive: true,
  },
  // @link https://nextjs.org/docs/advanced-features/compiler#minification
  swcMinify: false,
  experimental: {
    // React 18
    // @link https://nextjs.org/docs/advanced-features/react-18
    reactRoot: true,
    // React 18 streaming
    // @link https://nextjs.org/docs/advanced-features/react-18/streaming
    runtime: undefined,
    // React 18 server components
    // @link https://nextjs.org/docs/advanced-features/react-18/server-components
    serverComponents: false,
    // Standalone build
    // @link https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files-experimental
    outputStandalone: true,
    // @link https://nextjs.org/docs/advanced-features/output-file-tracing#caveats
    outputFileTracingRoot: undefined, // ,path.join(__dirname, '../../'),
    // Prefer loading of ES Modules over CommonJS
    // @link {https://nextjs.org/blog/next-11-1#es-modules-support|Blog 11.1.0}
    // @link {https://github.com/vercel/next.js/discussions/27876|Discussion}
    esmExternals: true,
    // Experimental monorepo support
    // @link {https://github.com/vercel/next.js/pull/22867|Original PR}
    // @link {https://github.com/vercel/next.js/discussions/26420|Discussion}
    externalDir: false,
  },

  /**
   * @link https://nextjs.org/docs/api-reference/next.config.js/rewrites
   async rewrites() {
    return [
      {
        source: `/`,
        destination: '/demo',
      },
    ];
  },
   */

  webpack: (config, { isServer }) => {
    if (isServer) {
      // Till undici 4 haven't landed in prisma, we need this for docker/alpine
      // @see https://github.com/prisma/prisma/issues/6925#issuecomment-905935585
      config.externals.push('_http_common');
    }
    return config;
  },
  env: {
    APP_NAME: packageJson.name,
    APP_VERSION: packageJson.version,
    BUILD_TIME: new Date().toISOString(),
  },
  serverRuntimeConfig: {
    // to bypass https://github.com/zeit/next.js/issues/8251
    PROJECT_ROOT: __dirname,
  },
};

const config = withTM(withMDX(nextConfig));

if (process.env.ANALYZE === 'true') {
  module.exports = withBundleAnalyzer(config);
} else {
  module.exports = config;
}
