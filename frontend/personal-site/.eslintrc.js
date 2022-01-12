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
  "rules": {
      "vue/multi-word-component-names": ["error", {
        "ignores": ["index"]
      }],
      "vue/max-attributes-per-line": ["off"],
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "always",
          "normal": "always",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }],
      "vue/no-v-html": ["off"],
      "vue/singleline-html-element-content-newline": ["off"]
  }
};
