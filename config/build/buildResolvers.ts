import webpack from 'webpack';

const buildResolvers = (): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  };
};

export default buildResolvers;
