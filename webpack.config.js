const webpack = require("webpack");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtract = require("mini-css-extract-plugin"); // 引入插件
module.exports = {
  entry: {
    app: path.resolve(__dirname, "./app.js")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ExtractTextPlugin.extract({
        use: [MiniCssExtract.loader, "css-loader", "postcss-loader"]
        // })
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtract.loader, // 配置规则，将处理后的css代码直接输出到指定文件中
          "css-loader",
          "less-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/1.html", filename: "1.html" }),
    new MiniCssExtract({
      // 创建该插件的实例
      filename: "main.css" // 指定输出的css文件的文件名
    })
  ]
};
