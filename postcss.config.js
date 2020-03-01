/**
 * Want to configure, see https://nextjs.org/docs/advanced-features/customizing-postcss-config
 */

module.exports = ctx => ({
    parser: ctx.parser ? 'sugarss' : false,
    plugins: {
        autoprefixer: {},
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
            ctx.env === 'production'
                ? {
                      preset: 'default',
                      discardComments: { removeAll: true },
                  }
                : false,
    },
});
