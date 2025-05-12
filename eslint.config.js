// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    files: ["**/*.css"],
    rules: {
      "at-rule-no-unknown": [
        true,
        {
          ignoreAtRules: ["tailwind", "apply", "layer", "screen"],
        },
      ],
    },
  },
]);
