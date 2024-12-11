import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const buildPlugins = (html: string): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
    new webpack.ProgressPlugin(),
  ];
};

export default buildPlugins;
