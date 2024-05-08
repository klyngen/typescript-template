module.exports = (config) => {
  config.set({
    // ... normal karma configuration

    // make sure to include webpack as a framework
    frameworks: ["mocha", "webpack"],

    plugins: ["karma-webpack", "karma-mocha", "karma-chrome-launcher"],

    files: [
      // all files ending in ".test.js"
      // !!! use watched: false as we use webpacks watch
      { pattern: "src/**/*.spec.ts", watched: false },
    ],
    browsers: ["ChromeHeadless"],
    preprocessors: {
      // add webpack as preprocessor
      "src/**/*.spec.ts": ["webpack"],
    },

    webpack: {
      resolve: {
        extensions: [".ts", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.ts?$/,
            use: "ts-loader",
            exclude: [/node_modules/],
          },
          {
            test: /\.css|\.s(c|a)ss$/,
            use: ["lit-scss-loader", "sass-loader"],
          },
        ],
      },
    },
  });
};
