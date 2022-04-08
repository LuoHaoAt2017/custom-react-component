const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader",
      },
      {
        use: ["style-loader", "css-loader", "less-loader"],
        test: /\.(css|less)$/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Custom React Component",
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/favicon.ico"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./assets/",
          to: "assets/",
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  devServer: {
    port: 9090,
  }
};
