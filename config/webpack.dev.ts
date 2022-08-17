import 'webpack-dev-server';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import commonConfig, { WebpackEnvs } from './webpack.common';
import path from 'path';

const devConfig: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    hot: true,
    open: false,
    historyApiFallback: {
      disableDotRule: true,
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    assetModuleFilename: 'assets/[hash][ext]',
    clean: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
};

export default (env: WebpackEnvs) => { return merge(commonConfig(env), devConfig); };
