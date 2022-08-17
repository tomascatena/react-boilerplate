import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig, { WebpackEnvs } from './webpack.common';
import path from 'path';

const prodConfig: Configuration = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'assets/[hash][ext]',
    clean: true,
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

export default (env :WebpackEnvs) => {
  return merge(commonConfig(env), prodConfig);
};
