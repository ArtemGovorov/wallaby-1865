module.exports = function (wallaby)
{
  return {
    files: [
      "tsconfig.json",
      'src/**/*.ts*',
      'testutils/**/*.ts*',
    ],

    tests: ['__test__/**/*.test.ts*'],

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs'
      })
    },

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    debug: true
  };
};
