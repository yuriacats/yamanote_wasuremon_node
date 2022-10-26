import type { Config } from 'jest';



module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  presets: [
    '@babel/preset-typescript',
  ],
};
