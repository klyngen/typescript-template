const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /^\.\/src\/config\/config.ts/, // src/main.ts
      "./src/config/config.prod.ts",
    ),
  ],
});
