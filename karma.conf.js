module.exports = (config) => {
  config.set({
    // ... normal karma configuration

    // make sure to include webpack as a framework
    frameworks: ["jasmine", "webpack"],
    reporters: ['mocha'],
    plugins: ["karma-webpack", "karma-jasmine", "karma-mocha-reporter", "karma-chrome-launcher"],

    files: [
      { pattern: "src/**/*.spec.ts", watched: false },
      { pattern: "src/**/*.test.ts", watched: false },
    ],
    browsers: ["ChromeHeadless"],
    preprocessors: {
      // add webpack as preprocessor
      "src/**/*.spec.ts": ["webpack" ],
      "src/**/*.test.ts": ["webpack" ],
    },
    loglevel: config.LOG_WARN,
    webpack: {
      devtool: 'inline-source-map',
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
