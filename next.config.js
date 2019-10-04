const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withMDX = require('@next/mdx')();
const mdxImagesPlugin = require('remark-images');
const mdxEmjoiPlugin = require('remark-emoji');
const path = require('path');

const nextConfig = {
    webpack: (config, options) => {
        console.log('config', config);
        // Add aliases, see also babelrc
        // config.resolve.alias["@content"] = path.resolve(__dirname, 'content');

        return config;
    },
};

const plugins = [
    [
        withSass,
        {
            webpack(config, options) {
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
