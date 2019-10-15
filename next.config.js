const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withMDX = require('@next/mdx')();
const mdxImagesPlugin = require('remark-images');
const mdxEmjoiPlugin = require('remark-emoji');
const path = require('path');

module.exports = withMDX(
    withCss(
        withSass({
            poweredByHeader: false,
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

/*
const nextConfig = {
    poweredByHeader: false,
    webpack: (config, options) => {
        console.log('config', config);
        return config
    },
};

const plugins = [
    [
        withSass,
        {
            webpack(config, options) {
                // Specific loader for images and fonts
                config.module.rules.push({
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                });

                return config;
            },
        },
    ],
    [
        withMDX,
        {
            mdPlugins: [mdxImagesPlugin, mdxEmjoiPlugin],
        },
    ],
];

module.exports = withPlugins(plugins, nextConfig);
*/
