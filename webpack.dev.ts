import * as webpack from 'webpack';
import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build_dev'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/pokedex_v3',
  },
  // @ts-ignore
  devServer: {
    proxy: {
      '/pokedex_v3/assets': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/pokedex_v3/assets': '/assets' },
      },
    },
  },
});

export default config;
