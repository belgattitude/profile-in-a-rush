const withMDX = require('@next/mdx')();
const mdxImagesPlugin = require('remark-images');
const mdxEmjoiPlugin = require('remark-emoji');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withFonts = require('next-fonts');
const config = withMDX(
  withFonts({
    poweredByHeader: true,
    reactStrictMode: true,
    mdPlugins: [mdxImagesPlugin, mdxEmjoiPlugin],

    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]',
          },
        },
      });
      /*
        config.module.rules.push({
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                    limit: 100000,
                    //name: '[name].[ext]',
                    //publicPath: '/fonts',
                    //outputPath: 'fonts',
                },
            },
        });
*/
      return config;
    },
  })
);

if (process.env.ANALYZE === 'true') {
  module.exports = withBundleAnalyzer(config);
} else {
  module.exports = config;
}
