module.exports = function (config) {
  config.set({
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
    },

    frameworks: [
      'jasmine',
      'karma-typescript',
    ],

    files: [
      {pattern: 'src/**/*.ts',}
    ],

    preprocessors: {
      '**/*.ts': ['karma-typescript'],
    },

    reporters: [
      'dots',
      'karma-typescript',
    ],

    browsers: [
      'ChromeHeadless',
    ],

    singleRun: true,
  });
};
