const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      templateParameters: {
        env: "hihi",
      },
    }),
  ],
};
