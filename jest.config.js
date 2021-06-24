module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/.cache/"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
  },
};
