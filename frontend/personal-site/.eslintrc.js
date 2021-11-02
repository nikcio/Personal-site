// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
     "parser": "@typescript-eslint/parser",
      "sourceType": "module"
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
