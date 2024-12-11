import webpack from 'webpack';

import WebpackOptions from './types/types';

import buildPlugins from './buildPlugins';
import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import buildDevServer from './buildDevServer';

const buildWebpackConfig = (options: WebpackOptions): webpack.Configuration => {
  const { buildMode, pathConfig, port, isDev } = options;
  const { entry, output, html } = pathConfig;

  return {
    mode: buildMode,
    entry,
    output: {
      filename: 'index.[contenthash].js',
      path: output,
      clean: true,
    },
    plugins: buildPlugins(html),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
  };
};

export default buildWebpackConfig;
