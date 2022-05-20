module.exports = {
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:vue/base",
  ],
  rules: {
    "vue/script-setup-uses-vars": "error",
  },
};
