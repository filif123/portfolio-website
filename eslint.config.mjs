// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default withNuxt([
  {
    files: ['**/*.ts', '**/*.vue', '**/*.mjs'],
    rules: {
      semi: ['error', 'always']
    }
  },
  eslintPluginPrettierRecommended
]);
