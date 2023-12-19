const pluginSecurity = require("eslint-plugin-security");

module.exports = [
  pluginSecurity.configs.recommended,
  {
    files: ["**/*.js"],
    ignores: ["**/*.test.js"],

    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    rules: {
      semi: ["warn", "always"],
      quotes: ["warn", "double"],
    },
  },
];
