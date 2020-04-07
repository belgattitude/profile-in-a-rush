/**
 * Want to configure, see https://nextjs.org/docs/advanced-features/customizing-postcss-config
 */

module.exports = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    cssnano:
      process.env.NODE_ENV === 'production'
        ? {
            preset: 'default',
            discardComments: { removeAll: true },
          }
        : false,
  },
};
