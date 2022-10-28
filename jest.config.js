module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testMatch: ["<rootDir>/__tests__/**/*.(spec|test).ts"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
