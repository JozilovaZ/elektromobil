// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    // O'zbek matnida apostrof ko'p (o', g') — React Native'da bu xavfsiz
    rules: { 'react/no-unescaped-entities': 'off' },
  },
]);
