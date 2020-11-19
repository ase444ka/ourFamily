const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
      index: '/src/entry.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      //contentBase: './dist',
      open: true
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: ''
    },
    resolve: {
      alias: {
          Blocks: path.resolve(__dirname, 'src/blocks'),
          Fonts: path.resolve(__dirname, 'src/fonts'),
      },
  },
    plugins: [
      new MiniCssExtractPlugin({filename: 'style.css'}),
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        title: 'Development',
        template: 'src/index.pug',
        favicon: 'src/favicon.ico',
      }),
    ],
    module: {
        rules: [
          {
            test: /\.s?css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }


        },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],

        
      
        

      },

  };