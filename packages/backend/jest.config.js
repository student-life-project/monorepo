const commonCofig = require("../../jest.config")

module.exports = ¨{
  ...commonCofig,
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
      "rootDir": "src",
        "testRegex": ".*\\.spec\\.ts$",
          "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "collectCoverageFrom": [
    "**/*.(t|j)s"
  ],
    "coverageDirectory": "../coverage",
      "testEnvironment": "node"
};
