const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    index2: './src/index2.js',
    reactInit: './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 根據大小判斷打包到代碼中(檔案大小沒超過limit)、或打包到對應輸出位置
            limit: 10240,
            outputPath: 'images',
            name: '[name]_[hash].[ext]',
          },
        },
      },
      // {
      //   test: /.js$/,
      //   exclude: /node_modules/,
      //   use: [new ESLintPlugin(options)]
      // },
      {
        test: /\.(m?js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    // 清空指定目錄下的文件(打包檔)
    new CleanWebpackPlugin(),
    // 會在打包結束後自動生成html文件，並把打包生成的文件自動引入到這個html文件
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ESLintPlugin({
      extensions: ['ts', 'js'],
    }),
  ],
};
