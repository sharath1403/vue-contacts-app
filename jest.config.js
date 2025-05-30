module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testEnvironment: 'jsdom',
  collectCoverage: true, // enable coverage collection
  collectCoverageFrom: [
    "src/**/*.{js,ts,vue}", // collect coverage from JS/TS/Vue files in src
    "!src/main.ts",          // exclude main.ts if you want
    "!**/node_modules/**",   // ignore dependencies
  ],
  coverageReporters: ["html", "text", "lcov"], // formats for coverage report
}
