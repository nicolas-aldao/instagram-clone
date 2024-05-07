const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

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
      name: 'Artgram',
      shortname: 'Artgram',
      description:
        'App made with react using webpack with midudev course from platzi',
      background_color: '#fff',
      theme_color: '#8d00ff',
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      // generate offline support
      runtimeCaching: [
        {
          urlPattern: new RegExp( // URLS where we store our app images
            'https://(res.cloudinary.com|images.unsplash.com)',
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          // URL where we have our api data
          urlPattern: new RegExp(
            'https://json-server-nicolas-aldao.vercel.app',
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
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
