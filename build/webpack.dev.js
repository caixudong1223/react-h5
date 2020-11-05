const webpack = require("webpack");
const { smart } = require("webpack-merge");
const base = require("./webpack.base"); //webpack基础配置
const config = require("./../config"); //环境参数

const PORT = process.env.PORT || 8000;

const devConfig = {
  mode: config.dev.NODE_ENV,
  devtool: "source-map",
  devServer: {
    stats: "errors-only",
    contentBase: "../dist",
    port: PORT,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      //允许在 编译时 创建配置的全局常量
      "process.env": JSON.stringify(config.dev),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = smart(base, devConfig)