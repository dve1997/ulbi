import path from 'path';
import webpack from 'webpack';

import buildWebpackConfig from './config/build/buildWebpackConfig';
import { PathConfig } from './config/build/types/types';
import { BuildMode } from './config/build/types/types';
import { buildEnv } from './config/build/types/types';
import WebpackOptions from './config/build/types/types';

export default (env: buildEnv) => {
  const buildMode: BuildMode = env.mode || 'development';
  const pathConfig: PathConfig = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };
  const PORT: number = env.port || 3000;
  const isDev = buildMode === 'development';
  const options: WebpackOptions = {
    buildMode,
    pathConfig,
    port: PORT,
    isDev,
  };

  const config: webpack.Configuration = buildWebpackConfig(options);

  return config;
};
