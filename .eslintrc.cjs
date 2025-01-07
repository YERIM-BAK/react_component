/* eslint-disable @typescript-eslint/no-require-imports */
const { resolve } = require("path")
const project = resolve(process.cwd(), "./tsconfig.json")

module.exports = {
  extends: [
    "next",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser", // 추가적인 설정이 필요한 경우 이곳에 작성
  // parserOptions: {
  //   project,
  // },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true, // Node.js 환경 활성화
    es2021: true, // ES2021 문법 지원 활성화
  },
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  plugins: ["@typescript-eslint", "react", "autofix", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: resolve(__dirname, "tsconfig.json"),
      },
    },
  },
  ignorePatterns: ["next-env.d.ts"],
  rules: {
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@next/next/no-html-link-for-pages": "off",
    "react/react-in-jsx-scope": "off",
    "spaced-comment": "warn",
    quotes: ["error", "double"],
    "no-console": "warn",
    "no-redeclare": "warn",
    "react/display-name": "off",
    "react/jsx-key": "warn",
    "arrow-body-style": "off",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_|^e$",
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: "^_|^e$",
      },
    ],
    "brace-style": "off",
    "import/no-unresolved": [
      "error",
      { ignore: ["\\@.*$"] }, // all our aliases start with a @ sign
    ],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
}
