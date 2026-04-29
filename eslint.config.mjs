import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "*.html",
      "script.js"
    ]
  },
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["app/**/*.js", "components/**/*.js", "lib/**/*.js", "scripts/**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        console: "readonly",
        process: "readonly",
        fetch: "readonly",
        FormData: "readonly",
        window: "readonly",
        document: "readonly",
        URL: "readonly",
        Response: "readonly",
        IntersectionObserver: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "off"
    }
  }
];

export default eslintConfig;
