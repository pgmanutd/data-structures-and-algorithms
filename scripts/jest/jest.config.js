module.exports = {
  name: 'unit',
  displayName: 'unit',
  rootDir: '../..',
  verbose: false,
  notify: false,
  roots: ['<rootDir>/src/app'],
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
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src/app', 'src/app/utils'],
  setupFiles: ['<rootDir>/scripts/jest/throwConsoleError.js'],
  collectCoverageFrom: ['src/app/**'],
  coveragePathIgnorePatterns: ['src/app/index.ts', '.*.(test|spec).ts?.snap?$'],
  coverageDirectory: 'reports/coverage',
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
};
