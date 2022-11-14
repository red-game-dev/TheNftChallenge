/** @type {import('ts-jest').JestConfigWithTsJest} */

// jest.config.js
const nextJest = require('next/jest')
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

const paths = compilerOptions.paths ? compilerOptions.paths : {};

require('dotenv').config({
  path: '.env.test'
});

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })

// Any custom config you want to pass to Jest
const customJestConfig = {
  verbose: true,
  preset: 'ts-jest',
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '<rootDir>/tests/**/*.test.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  testPathIgnorePatterns: [
      "<rootDir>/.next/",
      "<rootDir>/node_modules/",
      "<rootDir>/cypress/",
      "<rootDir>/webdriverio/",
      "<rootDir>/tests/__mocks__/",
      "<rootDir>/tests/setups/",
  ],
  moduleNameMapper: {
      ...pathsToModuleNameMapper(paths, { prefix: "<rootDir>/" }),
      "\\.(scss|sass|css)$": "identity-obj-proxy",
      '\\.(jpg|jpeg|png|gif|svg)$': ['<rootDir>/tests/__mocks__/fileMock.js'],
      "alchemy-sdk": '<rootDir>/tests/__mocks__/alchemy-sdk.js',
  },
  globals: process.env,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/tests/setups/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig)