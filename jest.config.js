module.exports = {
  errorOnDeprecated: true,
  setupFiles: [
    "./src/setupTest.js"
  ],
  collectCoverageFrom: [
    "**/*.{js,jsx,tsx,ts}",
    "!**/node_modules/**"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
}