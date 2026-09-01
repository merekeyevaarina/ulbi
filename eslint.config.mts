// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginI18n from "eslint-plugin-i18n";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["build/**"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { i18n: pluginI18n },
    rules: {
      "i18n/no-russian-character": "warn",
    },
  },
  { settings: { react: { version: "detect" } } },
  ...storybook.configs["flat/recommended"],
  // Storybook 7 keeps Meta/StoryObj on the renderer package (@storybook/react).
  // The rule below targets Storybook 8+ framework packages and breaks our build.
  {
    files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)", "**/*.story.@(ts|tsx|js|jsx|mjs|cjs)"],
    rules: {
      "storybook/no-renderer-packages": "off",
    },
  },
]);