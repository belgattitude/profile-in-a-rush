const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withMDX = require('@next/mdx')();
const mdxImagesPlugin = require('remark-images');
const mdxEmjoiPlugin = require('remark-emoji');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const config = withMDX(
    withCss(
        withSass({
            poweredByHeader: false,
            enabled: process.env.ANALYZE === 'true',
            mdPlugins: [mdxImagesPlugin, mdxEmjoiPlugin],

            webpack(config, options) {
                config.module.rules.push({
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                        },
                    },
                });
                return config;
            },
        })
    )
);

if (process.env.ANALYZE === 'true') {
    module.exports = withBundleAnalyzer(config, { enabled: true });
} else {
    module.exports = config;
}
