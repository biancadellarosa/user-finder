module.exports = {
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
    vitest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:vue/base",
  ],
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["Home"],
      },
    ],
    "vue/script-setup-uses-vars": "error",
  },
};
