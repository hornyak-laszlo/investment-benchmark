module.exports = {
  plugins: [
    'security'
  ],
  rules: {
    'security/detect-object-injection': 'off'
  },
  extends: [
    'standard',
    'plugin:security/recommended'
  ]
}
