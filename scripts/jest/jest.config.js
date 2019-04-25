module.exports = {
  name: 'unit',
  displayName: 'unit',
  rootDir: '../..',
  verbose: false,
  notify: false,
  roots: ['<rootDir>/packages'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^.+\\.(jpe?g|png|gif|ttf|eot|woff|svg|json)$':
      '<rootDir>/scripts/jest/fileMock.js',
    '^@data-structures-and-algorithms/utils(.*)$':
      '<rootDir>/packages/utils/src$1',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleDirectories: ['node_modules', 'packages'],
  setupFiles: ['<rootDir>/scripts/jest/throwConsoleError.js'],
  collectCoverageFrom: ['packages/**/*.ts', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['.*.(test|spec).ts?.snap?$'],
  coverageDirectory: '<rootDir>/reports/coverage',
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
};
