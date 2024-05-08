const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: [/node_modules/, '/node_modules/@web/test-runner-commands/browser/__web-dev-server__web-socket.js', '/__web-dev-server__web-socket.js'],
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        use: ["lit-scss-loader", "sass-loader"],
      },

    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: "none",
      template: "src/index.html",
    }),
  ],
};
