const webpack = require('webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const analyze = process.env.npm_config_analyze;

const plugins = analyze
  ? [
      new webpack.DefinePlugin({
        'process.env.name': JSON.stringify('Codevolution'),
      }),
      new BundleAnalyzerPlugin(),
    ]
  : [
      new webpack.DefinePlugin({
        'process.env.name': JSON.stringify('Codevolution'),
      }),
    ];

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: plugins,
};
