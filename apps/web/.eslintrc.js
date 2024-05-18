module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "no-eval": "off",
    camelcase: "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "_" }],
    "import/prefer-default-export": "off",
    "no-console": "warn",
    "no-param-reassign": "off",
    "no-use-before-define": "warn",
    "no-shadow": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never"
      }
    ],
    quotes: [
      1,
      "double",
      {
        avoidEscape: true
      }
    ]
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};
