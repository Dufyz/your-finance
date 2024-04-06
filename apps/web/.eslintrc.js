module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "sort-keys-fix",
    "import",
    "@typescript-eslint",
    "typescript-sort-keys"
  ],
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"]
      }
    }
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] }
    ],
    "import/extensions": ["off"],
    "linebreak-style": 0,
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "function-paren-newline": "off",
    ident: "off",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/no-unused-prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-curly-newline": "off",
    "no-useless-escape": "off",
    "no-console": "off",
    "import/namespace": "off",
    "@typescript-eslint/no-empty-function": "off",
    "import/default": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "no-unsafe-optional-chaining": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "consistent-return": "off",
    "no-shadow": "off",
    "react/function-component-definition": "off",
    "import/no-cycle": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "warn",
    "react/jsx-no-comment-textnodes": "off",
    "react/no-unstable-nested-components": "off",
    "react/display-name": "off",
    "react/no-array-index-key": "off",
    "jsx-a11y/img-redundant-alt": "off",
    "prefer-regex-literals": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "implicit-arrow-linebreak": "off",
    "comma-dangle": "off",
    quotes: ["warn", "double"],
    "react/jsx-one-expression-per-line": "off",
    "react/no-unescaped-entities": "off",
    "max-len": "off",
    "no-confusing-arrow": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["warn"],
    "import/no-unresolved": "off"
  }
};
