var webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'tests/**/*.spec.js'
    ],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec'],
    autoWatch: true,
    captureTimeout: 60000,
    browserDisconnectTimeout: 10000,  // 默认2000
    browserDisconnectTolerance: 1,  // 默认0
    browserNoActivityTimeout: 10000000, // 默认10000
    browsers: ['ChromeHeadless']
  })
}