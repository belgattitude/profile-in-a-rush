const withMDX = require('@next/mdx')();
const withBundleAnalyzer = require('@next/bundle-analyzer');

const withTM = require('next-transpile-modules')(['ky'], {
  debug: false,
});

const config = withTM(
  withMDX({
    poweredByHeader: true,
    reactStrictMode: true,
    optimizeFonts: true,
    // @link https://nextjs.org/docs/advanced-features/compiler#minification
    swcMinify: true,
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
      // Prefer loading of ES Modules over CommonJS
      // @link {https://nextjs.org/blog/next-11-1#es-modules-support|Blog 11.1.0}
      // @link {https://github.com/vercel/next.js/discussions/27876|Discussion}
      esmExternals: true,
      // Experimental monorepo support
      // @link {https://github.com/vercel/next.js/pull/22867|Original PR}
      // @link {https://github.com/vercel/next.js/discussions/26420|Discussion}
      externalDir: false,
    },

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
