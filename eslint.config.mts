// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginI18n from "eslint-plugin-i18n";
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  { ignores: ["build/**"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
    reactHooks.configs.flat.recommended,
    js.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginReactHooks.configs.flat.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { i18n: pluginI18n },
    rules: {
      'i18n/no-russian-character': 'warn',
      'react-hooks/rules-of-hooks' : 'error' ,
      'react-hooks/exhaustive-deps' : 'error' ,
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
);
