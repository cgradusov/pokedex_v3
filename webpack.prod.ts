import * as webpack from 'webpack';
import path from 'path';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import common from './webpack.common';

const config: webpack.Configuration = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          filter: (resourcePath) => {
            if (resourcePath.endsWith('.html')) {
              return false;
            }
            return true;
          },
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
});

export default config;
