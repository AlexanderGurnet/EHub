const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const analyze = process.env.npm_config_analyze;

const BundleAnalyzer = new BundleAnalyzerPlugin();
const MiniCss = new MiniCssExtractPlugin({
  filename: 'static/css/[name].[hash].css',
});

const plugins = analyze ? [BundleAnalyzer, MiniCss] : [MiniCss];

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: plugins,
};
