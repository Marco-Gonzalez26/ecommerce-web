module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/prop-type": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "import/no-duplicates": 1
  }
}
