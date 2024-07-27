export default {
  singleQuote: true,
  proseWrap: 'never',
  endOfLine: 'auto',
  tabWidth: 2,
  printWidth: 120,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  vueIndentScriptAndStyle: true,
  jsxSingleQuote: true,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
