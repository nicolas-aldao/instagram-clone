const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new WebpackPwaManifestPlugin({
      name: 'Instagram clone',
      shortname: 'Instagram clone',
      description:
        'App made with react using webpack with midudev course from platzi',
      background_color: '#fff',
      theme_color: '#8d00ff',
      icons: [
        {
          src: path.resolve('src/Assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'maskable',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  mode: 'development',
};
