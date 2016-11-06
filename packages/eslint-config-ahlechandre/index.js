const extExternal = [
  './node_modules/eslint-config-airbnb-base'
].map(require.resolve)

const extInternal = [
  './rules/best-pratices',
  './rules/errors',
  './rules/es6',
  './rules/imports',
  './rules/node',
  './rules/strict',
  './rules/style',
  './rules/variables',
].map(require.resolve)

module.exports = {
  extends: [...extExternal, ...extInternal],
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
}
