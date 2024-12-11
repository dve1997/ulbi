import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
  const loaderTS = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const loaderSCSS = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:8]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [loaderTS, loaderSCSS];
};

export default buildLoaders;
