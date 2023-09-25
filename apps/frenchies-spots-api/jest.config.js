module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testTimeout: 30000,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};
