module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,
    basePath: '../',
    frameworks: [
      "jasmine"
    ],

    files: [
      'lib/angular.min.js',
      'lib-integration.js',
      'node_modules/citypantry-js-lib/dist/lib-es5-with-browser-polyfill.js',
      'lib/angular-mocks.js',
      "your-code.js",
      "tests/your-code.spec.js"
    ],

    exclude: [
    ],

    port: 8080,

    browsers: [
      "Chrome"
    ],

    plugins: [
      "karma-chrome-launcher",
      "karma-jasmine"
    ],

    singleRun: false,
    colors: true,
    logLevel: config.LOG_INFO,
  });
};
