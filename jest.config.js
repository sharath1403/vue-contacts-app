module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,ts,vue}",
    "!src/main.ts",
    "!**/node_modules/**",
  ],
  coverageReporters: ["html", "text", "lcov"],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}