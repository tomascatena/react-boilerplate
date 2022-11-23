import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Configuration } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import plugins from './webpack.plugins';
import rules from './webpack.rules';

export type WebpackEnvs = {
  WEBPACK_BUNDLE: boolean;
  WEBPACK_BUILD: boolean;
  WEBPACK_ANALYZE: boolean;
}

const commonConfig = (env: WebpackEnvs): Configuration => {
  console.log(`Webpack env: ${JSON.stringify(env, null, 2)}\n`);

  if (env.WEBPACK_ANALYZE) {
    plugins.push(new BundleAnalyzerPlugin({}));
  }

  return {
    entry: `./src/index.tsx`,
    target: `web`,
    module: {
      rules
    },
    plugins,
    resolve: {
      extensions: [
        `.js`,
        `.jsx`,
        `.ts`,
        `.tsx`,
        `.json`
      ],
      plugins: [
        new TsconfigPathsPlugin({}),
      ],
    },
    optimization: {
      splitChunks: {
        chunks: `all`,
      }
    },
  };
};

export default (env: WebpackEnvs) => commonConfig(env);
