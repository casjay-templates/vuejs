require('@rushstack/eslint-patch/modern-module-resolution');

const path = require('node:path');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/airbnb',
    'airbnb-base',
+   'airbnb-typescript/base',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    //ecmaVersion: 2020,
    project: './tsconfig.json',
  },
  rules: {
    eqeqeq: 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'warn',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'vue/html-indent': 'off',
    'vue/max-attributes-per-line': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-newline': ['warn', { ObjectPattern: { multiline: true } }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`,
    }),
  },
};
