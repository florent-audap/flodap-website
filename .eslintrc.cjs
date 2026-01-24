module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true }
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  rules: {
    // Bruit réduit
    "react/react-in-jsx-scope": "off",

    // Vraiment utiles
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: { version: "detect" }
  }
};
