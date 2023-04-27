const { join } = require('path');
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  rootDir: join(__dirname, './'),
  cacheDirectory: join(__dirname, './node_modules/.jest/cache'),
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  bail: 1,
  testTimeout: 20 * 1000,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  transform: { '^.+\\.(j|t)sx?$': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
};
