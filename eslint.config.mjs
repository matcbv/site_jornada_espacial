import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: globals.node,
      sourceType: "commonjs"
    },
    rules: {
      eqeqeq: ["warn"],
      "no-multiple-empty-lines": ["error", {"max": 2}],
      camelcase: ["warn"],
      "no-alert": ["warn"],
    }
  },
  {
    files: ["frontend/js/*.js"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module"
    },
    rules: {
      eqeqeq: ["warn"],
      "no-multiple-empty-lines": ["error", {"max": 2}],
      camelcase: ["warn"],
      "no-alert": ["warn"],
    }
  },
  pluginJs.configs.recommended,
];
