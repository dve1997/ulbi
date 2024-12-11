export type BuildMode = 'development' | 'production';

export interface PathConfig {
  entry: string;
  output: string;
  html: string;
}

export interface buildEnv {
  mode: BuildMode;
  port: number;
}

interface WebpackOptions {
  buildMode: BuildMode;
  pathConfig: PathConfig;
  port: number;
  isDev: boolean;
}
export default WebpackOptions;
